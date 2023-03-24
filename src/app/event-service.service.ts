import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }

  loadingEvent = new EventEmitter<boolean>();
  analyticsEvent = new EventEmitter<object>();
  appEvent = new EventEmitter<object>();
  navigationEvent = new EventEmitter<string>();

  emitLoadingEvent(data: boolean) {
    console.log('the event emitted',data);
    this.loadingEvent.emit(data);
    (window as any).Android.handleCustomEvent(data);
  }

  emitAnalyticsEvent(data: object) {
    console.log('the event emitted',data);
    this.analyticsEvent.emit(data);
    (window as any).Android.handleCustomEvent(data);
  }

  emitAppData(data: object) {
    console.log('the event emitted',data);
    this.appEvent.emit(data);
    (window as any).Android.handleCustomEvent(data);
  }

  emitNavigationData(data: string) {
    console.log('the event emitted',data);
    this.navigationEvent.emit(data);
    (window as any).Android.handleCustomEvent(data);
  }
}
