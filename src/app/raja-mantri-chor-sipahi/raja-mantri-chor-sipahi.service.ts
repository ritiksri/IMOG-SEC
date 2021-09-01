import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RajaMantriChorSipahiService {
  static getAll() {
    throw new Error('Method not implemented.');
  }
  // baseUrl = 'http://localhost/AngularProj/ritikapp/php';
    baseUrl = 'https://shy-cougar-38.loca.lt/AngularProj/ritikapp/php';
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${this.baseUrl}/List.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  
}
