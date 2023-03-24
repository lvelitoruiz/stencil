import { Component } from '@angular/core';
import { EventServiceService } from './event-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private eventService: EventServiceService) {}

  emitCustomEvent() {
    console.log("emitting an event!");
    this.eventService.emitLoadingEvent(true);
  }
  emitAnalyticsEvent() {
    console.log('now is analytics');
    this.eventService.emitAnalyticsEvent({'event': 'error','data': '1'})
  } 
  emitAppData() {
    console.log('now is open');
    this.eventService.emitAppData({'app': 'whatsapp','data': 'http://whatsapp.com/asasas'})
  } 
  emitNavigationData() {
    console.log('now is navigation');
    this.eventService.emitNavigationData('back')
  } 
}
