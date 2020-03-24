import { Component, OnInit } from '@angular/core';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  isConnected: Boolean = false;
  presence: String = 'offline';

  constructor() { }

  ngOnInit() {
    $(document).on(rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED, this.onConnectionStateChangeEvent.bind(this));
    $(document).on(rainbowSDK.presence.RAINBOW_ONPRESENCECHANGED, this.onPresenceChanged.bind(this));
  }

  onConnectionStateChangeEvent = function onConnectionStateChangeEvent(event, status) {
    if (status === rainbowSDK.connection.RAINBOW_CONNECTIONCONNECTED) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
      this.presence = 'offline';
    }
  };

  onPresenceChanged = function onPresenceChanged(event, json) {
    this.presence = json.status;
  };

  online() {
    rainbowSDK.presence.setPresenceTo(rainbowSDK.presence.RAINBOW_PRESENCE_ONLINE);
  };

  away() {
    rainbowSDK.presence.setPresenceTo(rainbowSDK.presence.RAINBOW_PRESENCE_AWAY);
  };

  dnd() {
    rainbowSDK.presence.setPresenceTo(rainbowSDK.presence.RAINBOW_PRESENCE_DONOTDISTURB);
  };

}
