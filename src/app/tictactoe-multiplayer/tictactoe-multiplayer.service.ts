import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { List } from './List';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class TictactoeMultiplayerService {
  url = '';
  ngOnInit(): void {
    this.url = this.sharedService.nextMessage(this.url);
  }

  static getAll() {
    throw new Error('Method not implemented.');
  }
  // url = 'http://localhost/AngularProj/ritikapp/php';
    // url = this.url;
  constructor(private http: HttpClient, private sharedService: AppService) { }
  getAll() {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.get(`${this.url}/List.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  getAll2() {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.get(`${this.url}/gametime.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  store(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/store.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  update(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/update.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  delete(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/delete.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  updatecopy(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/update_copy.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  update2(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/gametime.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
