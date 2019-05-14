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


    getAllProduct() {
        return this.http.get(url + 'product/all');
    }

    getProduct(id) {
        return this.http.get(url + 'product/' + id);
    }
    updateProduct(value) {
        console.log(value)
        return this.http.put(url + 'product', value).subscribe();
    }
    insertProduct(value) {
        return this.http.post(url + 'product', value).subscribe();
    }

    deleteProduct(id) {
        return this.http.delete(url + 'product/' + id).subscribe();
    }
    deleteAllProduct(id) {
        return this.http.delete(url + 'product/stock/' + id).subscribe();
    }
}