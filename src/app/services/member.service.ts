import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class MemberService {

    constructor(private http: HttpClient) { }

    
    getAllMember() {
        return this.http.get(url + 'member/all');
    }
    

    insertMember(value) {    
        return this.http.post(url + 'member', value).subscribe();
    }
    deleteMember(id) {
        return this.http.delete(url + 'member/' + id).subscribe();
    }
    upPoint(value){
        return this.http.post(url + 'member/uppoint' , value).subscribe();
    }
    downPoint(value){
        return this.http.post(url + 'member/downpoint' , value).subscribe();
    }
    
}