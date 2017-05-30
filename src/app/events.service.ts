import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class EventsService {

  constructor(private http:Http) { }

  getEvents() {
    return this.http.get('http://localhost:3000/api/events').map(res => res.json());
  }
  getEventsById(id:string){
    return this.http.get('http://localhost:3000/api/events/'+id).map(res=>res.json());
  }
  getEventByDate(){
    return this.http.get('http://localhost:3000/api/events/date').map(res=>res.json());

  }
  getArticlesByDate(){
    return this.http.get('http://localhost:3000/api/article/date').map(res=>res.json());
  }

}
