import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Product } from "./product.model";
// import {from} from "rxjs";


@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1, Category 1", 100),
        new Product(2, "Product 2", "Category 1", "Product 2, Category 1", 100),
        new Product(3, "Product 3", "Category 2", "Product 3, Category 2", 90),
        new Product(4, "Product 4", "Category 2", "Product 4, Category 2", 60),
        new Product(5, "Product 5", "Category 1", "Product 5, Category 1", 55.99),
        new Product(6, "Product 6", "Category 3", "Product 6, Category 3", 9.99),
        new Product(7, "Product 7", "Category 3", "Product 7, Category 3", 8),
        new Product(8, "Product 8", "Category 1", "Product 8, Category 1", 11),
        new Product(9, "Product 9", "Category 2", "Product 9, Category 2", 999.99),
        new Product(10, "Product 10", "Category 1", "Product 10, Category 1", 64),
        new Product(11, "Product 11", "Category 1", "Product 11, Category 1", 65),
        new Product(12, "Product 12", "Category 2", "Product 12, Category 2", 18.49),
        new Product(13, "Product 13", "Category 1", "Product 13, Category 1", 99),
        new Product(14, "Product 14", "Category 2", "Product 14, Category 2", 100),
        new Product(15, "Product 15", "Category 3", "Product 15, Category 3", 199),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
}