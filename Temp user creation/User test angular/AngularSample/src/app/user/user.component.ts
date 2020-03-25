import { Component, OnInit, Input, HostListener } from '@angular/core';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  user = null;
  isConnected = false;

  constructor() { }

  ngOnInit() {
    $(document).on(rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED, this.onConnectionStateChangeEvent.bind(this));
    $(document).on(rainbowSDK.connection.RAINBOW_ONSTARTED, this.onStarted.bind(this));
  }

  onConnectionStateChangeEvent = function onConnectionStateChangeEvent(event, status) {
    if (status === rainbowSDK.connection.RAINBOW_CONNECTIONCONNECTED) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
      this.user = null;
    }
  };

  onStarted = function onStarted() {
    this.user = rainbowSDK.contacts.getConnectedUser();
    $(document).on(rainbowSDK.contacts.RAINBOW_ONINFORMATIONCHANGED, this.onInformationChanged.bind(this));
  };

  onInformationChanged = function onInformationChanged(event, user) {
    if (!this.user) {
      this.user = user;
    }
  };

}
