import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from './models/course';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 private apiUrl = 'http://localhost:8081/course';

  constructor(private http: HttpClient) { }

  getAllCourse(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

  registerToCourse(id: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,{});
  }
}
