from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views import generic

from .models import Question, Choice


class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'  # to override default context name

    def get_queryset(self):
        # return the last 5 published questions
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'


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
