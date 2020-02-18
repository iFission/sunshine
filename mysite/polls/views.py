from django.http import HttpResponse, HttpResponseRedirect
from .models import Question, Choice
from django.template import loader
from django.shortcuts import render, get_object_or_404
from django.urls import reverse


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
        # request.POST = dict object
        # request.POST['key'] to extract the value, always string
        # raises KeyError if key not found
        # request.GET similar
    except (KeyError, Choice.DoesNotExist):
        return render(
            request,
            'polls/detail.html',
            {
                'question': question,
                'error_message': "You did not select a choice"
            },
        )
    else:
        selected_choice.votes += 1
        selected_choice.save()

        return HttpResponseRedirect(
            reverse('polls:results', args=(question.id, )))
        # 'polls:results' to reference the url
        # input args, to simulate

        # HttpResponseRedirect(url to redirect to)
        # rather than normal
        # convention to do redirect after POST

        # reverse(name_of_view, variable of the url to the view)
        # eg reverse('polls:results', args=(question.id,))
        # => '/polls/3/results/'
        # similar to {% url 'polls:detail' question.id %}

        # overall redirect to /polls/3/results/
