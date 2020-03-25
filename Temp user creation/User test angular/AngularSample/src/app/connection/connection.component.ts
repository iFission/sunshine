import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var rainbowSDK: any;
declare var $: any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  hosts = [
    {name: 'Rainbow Sandbox', value: 'sandbox'},
    {name: 'Rainbow Official', value: 'rainbow'}
  ];

  profileForm = this.fb.group({
    host: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoading = false;
  isConnected = false;
  public state = rainbowSDK.connection.getState();

  onStateChanged = function onStateChanged(event, status) {
    this.state = rainbowSDK.connection.getState();
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    $(document).on(rainbowSDK.connection.RAINBOW_ONCONNECTIONSTATECHANGED, this.onStateChanged);
  }

  async onSubmit() {

    this.isLoading = true;

    try {

      switch (this.profileForm.value.host) {

        case 'rainbow':
          await rainbowSDK.connection.signinOnRainbowOfficial(this.profileForm.value.login, this.profileForm.value.password);
          console.log('[SAMPLE] :: Successfully signed on Rainbow official !');
          this.isConnected = true;
          break;
        default:
        case 'sandbox':
          await rainbowSDK.connection.signin(this.profileForm.value.login, this.profileForm.value.password);
          console.log('[SAMPLE] :: Successfully signed on Rainbow Sandbox !');
          this.isConnected = true;
        break;
      }

    } catch (exception) {
      console.log('[SAMPLE] :: Error when sign-in', exception);
    } finally {
      this.isLoading = false;
      this.state = rainbowSDK.connection.getState();
    }
  }

  async logout() {
    this.isLoading = true;

    try {
      await rainbowSDK.connection.signout();
      this.isConnected = false;
      this.state = 'disconnected';
    } catch (exception) {
      console.error('Something wrong happened');
    } finally {
      this.isLoading = false;
    }
  }

}
