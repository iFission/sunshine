import { Component, OnInit, Input } from '@angular/core';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: any;

  isConnectedUser = false;

  constructor() { }

  ngOnInit() {
    if (this.contact && this.contact.id === rainbowSDK.contacts.getConnectedUser().id) {
      this.isConnectedUser = true;
    }
  }

  async createConversation() {
    try {
     await rainbowSDK.conversations.openConversationForContact(this.contact);
    } catch (exception) {
      console.error(exception);
    }
  }

  async closeConversation() {
    try {
      await rainbowSDK.conversations.closeConversation(this.contact.conversation);
     } catch (exception) {
       console.error(exception);
     }
  }

}
