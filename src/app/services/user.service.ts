import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(id) {
        return this.http.get(url + 'user/' + id);
    }
    getAllUser() {
        return this.http.get(url + 'user/all');
    }
    login(value) {
        console.log(value)
        return this.http.post(url + 'user/login' , value).subscribe();
    }
    insertUser(value) {    
        console.log(value)
        return this.http.post(url + 'user', value).subscribe();
    }
    deleteUser(id) {
        return this.http.delete(url + 'user/' + id).subscribe();
    }
}