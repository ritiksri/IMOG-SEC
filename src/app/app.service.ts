import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  public message = 'http://192.168.1.2/php';
  // sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.message = 'http://192.168.1.2/php';
    return 'http://192.168.1.2/php';
  }
}
