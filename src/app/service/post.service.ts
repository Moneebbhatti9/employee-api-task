import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  private url = 'https://dummyjson.com/posts';

  getPost(): Observable<any> {
    return this.http.get(this.url);
  }
}
