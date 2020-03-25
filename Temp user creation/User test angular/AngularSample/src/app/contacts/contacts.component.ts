import { Component, OnInit, OnDestroy } from '@angular/core';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {

  isConnected: Boolean = false;
  nbContacts: Number = 0;
  contacts: Array<any> = [];
  listeners: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.listeners.push($(document).on(rainbowSDK.connection.RAINBOW_ONSTARTED,
       this.onStarted.bind(this)));

    this.listeners.push($(document).on(rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED,
       this.onConnectionStateChangeEvent.bind(this)));

    this.listeners.push($(document).on(rainbowSDK.presence.RAINBOW_ONCONTACTPRESENCECHANGED,
       this.onContactPresenceChangeEvent.bind(this)));

    this.listeners.push($(document).on(rainbowSDK.contacts.RAINBOW_ONCONTACTINFORMATIONCHANGED,
       this.onContactInformationChangeEvent.bind(this)));

    this.listeners.push($(document).on(rainbowSDK.contacts.RAINBOW_ONCONTACTINFORMATIONCHANGED,
       this.onContactsInformationChanged.bind(this)));
  }

  ngOnDestroy() {
    let listener = this.listeners.pop();
    while (listener) {
      listener();
      listener = this.listeners.pop();
    }
  }

  onStarted = function onStarted() {
    this.contacts = rainbowSDK.contacts.getAll();
  };

  onConnectionStateChangeEvent = function onConnectionStateChangeEvent(event, status) {
    if (status === rainbowSDK.connection.RAINBOW_CONNECTIONCONNECTED) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
      this.nbContacts = 0;
      this.contacts = [];
    }
  };

  onContactPresenceChangeEvent = function onContactPresenceChangeEvent(event, status) {
    console.log('DEMO :: presence changed to ', status);
  };

  onContactInformationChangeEvent = function onContactInformationChangeEvent(event, contact) {
    console.log('DEMO :: Contact information changed to ', contact);
  };

  onContactsInformationChanged = function onContactsInformationChanged(event, contact) {
    if (!(contact.id in this.contacts)) {
      this.contacts[contact.id] = contact;
      this.countNbContacts();
    }
  };

  countNbContacts() {
    this.nbContacts = Object.keys(this.contacts).length;
  }
}
