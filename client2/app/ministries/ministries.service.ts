import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators';


import { Ministry } from './ministry';
@Injectable()
export class MinistriesService {

  constructor(private http: Http) { }

  getMinistries() : Observable<Ministry[]> {
    return this.http.get('/ministry').pipe(map( (response) => response.json() ));
  }

}
