import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input() message: any;
  date: any;
  subscribe: any;

  constructor() { }

  ngOnInit() {

    const updateDateFields = timer(0, 30000);

    this.subscribe = updateDateFields.subscribe(n => {
      const mdate = moment(this.message.date);

      if (moment().diff(mdate, 'days') === 0) {
        this.date =  mdate.fromNow();
      } else {
        this.date =  mdate.format('lll');
      }
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
