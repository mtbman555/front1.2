import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class StockService {

    constructor(private http: HttpClient) { }


    getAllStock() {
        return this.http.get(url + 'stock/all');
    }

    insertStock(value) {
        return this.http.post(url + 'stock', value).subscribe();
    }

    deleteStock(id) {
        return this.http.delete(url + 'stock/' + id).subscribe();
    }
}