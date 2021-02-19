import { Injectable, ReflectiveInjector } from "@angular/core";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http"
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { map } from 'rxjs/operators';


const PROTOCOL = "http";
const PORT = 3500;

export class AuthData{
    success: boolean;
    token: string;    
}

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;
    auth_data: AuthData;   
    auth_headers: HttpHeaders; 

    constructor(private http: HttpClient){
        //this.baseUrl = '${PROTOCOL}://${location.hostname}:${PORT}/';
        //this.baseUrl = 'http://localhost:3500/';
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;     

    }

    authenticate(user: string, pass: string): Observable<boolean> {
        //let res;
        return this.http.post<AuthData>(this.baseUrl + "login", {name: user, password: pass})
            .pipe(map(response => {
                let resp = response;
                this.auth_token = resp.success ? resp.token : null;
                /* if(this.auth_token.length > 0) {
                    this.auth_headers.set("Authorization:", `Bearer<${this.auth_token}>`);                  
                } */               
                return resp.success;
            }))
        //    .subscribe((resp: AuthData) => {this.auth_data = resp;}, 
        //    error => console.log(error));        
        //console.log(res);
        //return this.auth_data.success;
    }

    setAuthHeaders() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer<${this.auth_token}>` });
        this.auth_headers = headers;
        //if(this.auth_token.length > 0 && this.auth_headers. == 0) {
        //    this.auth_headers.set("Authorization:", `Bearer<${this.auth_token}>`);
        //}
    }

    getProducts(): Observable<Product[]> {       
        return this.http.get<Product[]>(this.baseUrl + "products");        
        //return this.sendRequest("GET", "products");
    }

    saveProduct(product: Product): Observable<Product> {
        this.setAuthHeaders();
        return this.http.post<Product>(this.baseUrl + "products", 
            product, {headers: this.auth_headers});
    }

    updateProduct(product: Product): Observable<Product> {     
        this.setAuthHeaders();   
        return this.http.put<Product>(this.baseUrl + `products/${product.id}`, 
            product, {headers: this.auth_headers});
    }

    deleteProduct(id: number): Observable<Product> {    
        this.setAuthHeaders();    
        return this.http.delete<Order>(this.baseUrl + `products/${id}`,
            {headers: this.auth_headers});
    }

    getOrders(): Observable<Order[]> {
        this.setAuthHeaders();
        return this.http.get<Order[]>(this.baseUrl + "orders",
            {headers: this.auth_headers});
    }

    deleteOrder(id: number): Observable<Order> {
        this.setAuthHeaders();
        return this.http.delete<Order>(this.baseUrl + `orders/${id}`,
            {headers: this.auth_headers});
    }

    updateOrder(order: Order): Observable<Order> {
        this.setAuthHeaders();
        return this.http.put<Order>(this.baseUrl + `orders/${order.id}`, 
            order, {headers: this.auth_headers});
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
        //return this.sendRequest("POST", "orders", order);
    }

    // private sendRequest(verb: string,
    //     url: string, body?: Product | Order, auth: boolean = false)
    //         : Observable<Product | Product[] | Order | Order[]> {
    //     let request = new HttpRequest(verb, this.baseUrl + url, {body: body});

    //     if(auth && this.auth_token != null) {
    //         request.headers.set("Authorization", `Bearer<$(this.auth_token)>`);
    //     }
        
    //         // return this.http.request(new HttpRequest({
    //         //     method: verb,
    //         //     url: this.baseUrl + url,
    //         //     body: body
    //         // })).
    //         //return this.http.get<       
    //     if(verb.toUpperCase() == "GET") {
    //         return this.http.get(request.url, {headers: request.headers}).pipe(
    //             map((resp: Product|Product[]|Order|Order[]) => {
    //                 //let resp = response;
    //                 return resp;
    //             })
    //         )
    //     }
    //     else if(verb.toUpperCase() == "POST") {
    //         return this.http.post(request.url, body, {headers: request.headers}).pipe(
    //             map((resp : Product|Product[]|Order|Order[]) =>  {
    //                     //let resp = response;
    //                     return resp;
    //                 })
    //         );
    //     }    
    //     else
    //         return null;
        
    //     /*this.http.get(request);    
    //     return this.http.request(request).subscribe(response => {
    //         let resp = response;
    //         return resp;
    //     });*/
    //     //return resp;
    // }
}