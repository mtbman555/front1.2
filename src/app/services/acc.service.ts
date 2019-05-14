import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class AccService {

    constructor(private http: HttpClient) { }


    getAllAcc() {
        return this.http.get(url + 'acc/all');
    }

    getAcc(id) {
        return this.http.get(url + 'acc/' + id);
    }

    insertAcc(value) {
        return this.http.post(url + 'acc', value).subscribe();
    }

    deleteAcc(id) {
        return this.http.delete(url + 'acc/' + id).subscribe();
    }
    deleteAllAcc(id) {
        return this.http.delete(url + 'acc/month/' + id).subscribe();
    }
}