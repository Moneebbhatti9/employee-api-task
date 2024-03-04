import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
