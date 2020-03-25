import { Component, OnInit, Input, ElementRef, ViewChild, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnDestroy {

  @Input() conversation: any;
  @ViewChild('conv', { static: false}) conv: ElementRef;
  contact: any;
  handlers: any[];
  subscription: Subscription;
  message: string;

  constructor(private messageService: MessageService, private renderer: Renderer2) {
    this.subscription = this.messageService.getMessage().subscribe(userId => {
      if (userId === this.conversation.contact.id) {
        this.onConversationChanged();
      }
    });
  }

  async ngOnInit() {
    this.contact = this.conversation.contact;

    await rainbowSDK.im.getMessagesFromConversation(this.conversation, 50);
    this.onConversationChanged();

    this.renderer.listen(this.conv.nativeElement, 'scroll', (event) => {
      if (this.conv.nativeElement.scrollTop <= 0) {
        rainbowSDK.im.getMessagesFromConversation(this.conversation, 30);
      }
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onConversationChanged() {
    setTimeout(() => {
      const containerHeight = $('.conversation-' + this.conversation.dbId)[0].scrollHeight;
      try {
        this.conv.nativeElement.scrollTop = containerHeight;
      } catch(err) {
        console.error(err);
      }
    }, 100);
  }

  onSend() {
    rainbowSDK.im.sendMessageToConversation(this.conversation, this.message);
    this.message = '';
  }

}
