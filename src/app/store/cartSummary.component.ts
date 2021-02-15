import { Component } from "@angular/core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Cart } from "../model/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
    faShoppingCart = faShoppingCart;
    constructor(public cart: Cart){}
}