import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { List } from './List';

@Injectable({
  providedIn: 'root'
})
export class TictactoeMultiplayerService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  // baseUrl = 'http://localhost/AngularProj/ritikapp/php';
    baseUrl = 'https://9ef6c456a10b5d.localhost.run/php';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${this.baseUrl}/List.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  getAll2() {
    return this.http.get(`${this.baseUrl}/gametime.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  store(car: List) {
    return this.http.post(`${this.baseUrl}/store.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  update(car: List) {
    return this.http.post(`${this.baseUrl}/update.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  delete(car: List) {
    return this.http.post(`${this.baseUrl}/delete.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  updatecopy(car: List) {
    return this.http.post(`${this.baseUrl}/update_copy.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  update2(car: List) {
    return this.http.post(`${this.baseUrl}/gametime.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
