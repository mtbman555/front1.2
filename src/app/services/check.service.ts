import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class CheckService {

    constructor(private http: HttpClient) { }

    
    getAllCheck() {
        return this.http.get(url + 'check/all');
    }

    insertCheck(value) {    
        return this.http.post(url + 'check', value).subscribe();
    }
    insertCheck2(value) {    
        return this.http.post(url + 'check/pro', value).subscribe();
    }
    insertCheck3(value) {    
        return this.http.post(url + 'check/last', value).subscribe();
    }
    deleteCheck(id) {
        console.log(id)
        return this.http.delete(url + 'check/' + id).subscribe();
    }
    getCheckByTable(table){
        console.log(table)
        return this.http.get(url + 'check/table/' + table);
    }
    getCheckByNull() {
        return this.http.get(url + 'check/null');
    }
    deleteCheckByName(value){
        console.log(value)
        let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: {
              value
            },
        };
        return this.http.delete(url + 'check' ,options).subscribe();
    }
}