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
    let mobileData = '{“accion”: “LOADING”,“valor”: "true"}';
    (window as any).MobileInterface.handleCustomEvent(mobileData);
  }

  emitAnalyticsEvent(data: object) {
    console.log('the event emitted',data);
    this.analyticsEvent.emit(data);
    let mobileData = '{“accion”: “ANALYTICS”,“valor”: {“event”: “error”,“value1”: “value1"}}';
    (window as any).MobileInterface.handleCustomEvent(mobileData);
  }

  emitAppData(data: object) {
    console.log('the event emitted',data);
    this.appEvent.emit(data);
    let mobileData = '{“accion”: “OPEN”,"app":"WHATSAPP",“valor”: "http://whatsapp.com/asasas"}';
    (window as any).MobileInterface.handleCustomEvent(mobileData);
  }

  emitNavigationData(data: string) {
    console.log('the event emitted',data);
    this.navigationEvent.emit(data);
    let mobileData = '{“accion”: “NAVIGATION”,“valor”: "back"}';
    (window as any).MobileInterface.handleCustomEvent(mobileData);
  }
}
