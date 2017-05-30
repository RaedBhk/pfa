import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MemberService {

  constructor(private http:Http) { }

  getMembers() {
    return this.http.get('http://localhost:3000/api/member').map(res => res.json());
  }

  getMemberById(id:string){
    return this.http.get('http://localhost:3000/api/member/'+id).map(res=>res.json());
  }

  setMember(id,member) {
    return this.http.post('http://localhost:3000/api/member/'+id,member).map(res => res.json());
  }
  addArticle(article){
    return this.http.post('http://localhost:3000/api/article',article).map(res => res.json());
  }
}
