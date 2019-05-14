import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class MonthService {

    constructor(private http: HttpClient) { }


    getAllMonth() {
        return this.http.get(url + 'month/all');
    }

    insertMonth(value) {
        return this.http.post(url + 'month', value).subscribe();
    }

    deleteMonth(id) {
        return this.http.delete(url + 'month/' + id).subscribe();
    }
}