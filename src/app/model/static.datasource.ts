import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "./product.model";
// import {from} from "rxjs";


@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1, Category 1", 100),
        new Product(2, "Product 2", "Category 1", "Product 2, Category 1", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}