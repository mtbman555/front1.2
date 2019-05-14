import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { environment } from "../../environments/environment"


const url = environment.apiUrl
@Injectable()
export class FoodService {

    constructor(private http: HttpClient) { }

    getFood(id) {
        return this.http.get(url + 'food/' + id);
    }
    getAllFood() {
        return this.http.get(url + 'food/all');
    }

    insertFood(value) {    
        console.log(value)
        return this.http.post(url + 'food', value).subscribe();
    }
    deleteFood(id) {
        return this.http.delete(url + 'food/' + id).subscribe();
    }
}