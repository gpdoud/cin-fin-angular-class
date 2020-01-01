import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  students = [
    { name: 'Greg', role: 'Instructor' },
    { name: 'Patricia', role: 'Director' },
    { name: 'Terri', role: 'Sales' }
  ];

  get(): Observable<any> {
    return of(this.students) as Observable<any>;
  }

  constructor() { }
}
