import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data from a single API endpoint
    getAllProduct() {
        return this.http.get(url + 'product/all');
    }

    insertProduct(value) {    
        return this.http.post(url + 'product',value, httpOptions);
    }
}