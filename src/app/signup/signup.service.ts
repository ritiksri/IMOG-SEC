import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://192.168.1.2/php/user';

  store(users: user) {
    return this.http.post(`${this.baseUrl}/storeuser.php`, { data: users }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
        
      })
    );
  }
}
