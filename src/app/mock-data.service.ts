import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get('https://randomuser.me/api/?results=12&nat=us')
  }
}