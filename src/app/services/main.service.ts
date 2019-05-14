import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class MainService {

    constructor(private http: HttpClient) { }

    
    getAllMain() {
        return this.http.get(url + 'main/all');
    }

    insertMain(value) {    
        return this.http.post(url + 'main', value).subscribe();
    }
    deleteMain(id) {
        return this.http.delete(url + 'main/' + id).subscribe();
    }
}