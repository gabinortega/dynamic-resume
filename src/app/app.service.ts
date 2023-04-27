import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getDegreesList() {
    return this.http.get<any>('assets/degrees_list.json');
  }
}
