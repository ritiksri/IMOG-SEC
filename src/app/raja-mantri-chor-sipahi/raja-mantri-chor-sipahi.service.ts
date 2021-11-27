import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
import { List } from './List';
@Injectable({
  providedIn: 'root'
})
export class RajaMantriChorSipahiService {

  url = '';
  ngOnInit(): void {
    this.url = this.sharedService.nextMessage(this.url);
  }


  static getAll() {
    throw new Error('Method not implemented.');
  }
  // baseUrl = 'http://localhost/AngularProj/ritikapp/php';
    baseUrl = this.url;
  constructor(private http: HttpClient, private sharedService: AppService) { }
  getAll() {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.get(`${this.url}/rmcs/List.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  store(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/rmcs/store.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  updatecopy(car: List) {
    this.url = this.sharedService.nextMessage(this.url);
    return this.http.post(`${this.url}/rmcs/update_copy.php`, { data: car }, {responseType: 'text'}).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
  
}
