import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  providers: [MessageService]
})
export class ConversationsComponent implements OnInit {

  conversations: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    $(document).on(rainbowSDK.conversations.RAINBOW_ONCONVERSATIONSCHANGED, this.onConversationsListChanged.bind(this));
    $(document).on(rainbowSDK.conversations.RAINBOW_ONCONVERSATIONREMOVED, this.onConversationsListChanged.bind(this));
    $(document).on(rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED, this.onConnectionStateChangeEvent.bind(this));
    $(document).on(rainbowSDK.conversations.RAINBOW_ONCONVERSATIONCHANGED, this.onConversationChanged.bind(this));
  }

  getAllOneToOneConversations() {
    const conversations = rainbowSDK.conversations.getAllConversations();

    let oneToOneConversations = [];

    conversations.forEach( (conversation) => {
      if (conversation.type === 0) {
        oneToOneConversations.push(conversation);
      }
    });

    return oneToOneConversations;
  }

  onConversationsListChanged = function onConversationsListChanged(event, conversation) {
    this.conversations = this.getAllOneToOneConversations();
  };

  onConnectionStateChangeEvent = function onConnectionStateChangeEvent(event, status) {
    if (status === rainbowSDK.connection.RAINBOW_CONNECTIONCONNECTED) {
      this.conversations = this.getAllOneToOneConversations();
    } else {
      this.conversations = [];
    }
  };

  onConversationChanged = function onConversationChanged(event, userId) {
    this.messageService.sendMessage(userId);
  };

}
