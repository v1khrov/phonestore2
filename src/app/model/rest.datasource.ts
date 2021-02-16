import { Injectable } from "@angular/core";
import {HttpClient, HttpRequest} from "@angular/common/http"
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient){
        //this.baseUrl = '${PROTOCOL}://${location.hostname}:${PORT}/';
        this.baseUrl = 'http://localhost:3500/';
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }

    private sendRequest(verb: string,
        url: string, body?: Product | Order): Observable<Product | Order> {
            // return this.http.request(new HttpRequest({
            //     method: verb,
            //     url: this.baseUrl + url,
            //     body: body
            // })).
            //return this.http.get<
            return null;
    }
}