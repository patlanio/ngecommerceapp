import {Component, OnInit} from '@angular/core'
import {CartService} from '../services/cart.service'

@Component({
    selector: 'cart',
    template: 
    `
        <div class="cart">
            <h2>Carrito</h2>
            {{details | json}}
            <span>{{details.items}} articulos</span>
            <span class="total">{{details.total | currency : 'USD' : true : '1.2-2'}}</span>
            <div class="detail" *ngFor="let key of keys()">
                {{courses[key].name}}
                {{courses[key].price | currency : 'USD' : true : '1.2-2'}}
                x
                {{courses[key].quantity}}
                <span class="total">
                    {{ (courses[key].quantity * courses[key].price ) | currency : 'USD' : true : '1.2-2' }}
                </span>                
             
            </div>
            <div class=""></div>
        </div>
    `
})

export class CartComponent implements OnInit {
    courses: any;
    details: any;

    constructor( private CartService: CartService) {

    }

    keys() {
        return Object.keys(this.courses);
    }

    ngOnInit() {
        this.courses = this.CartService.getCourses();
        this.details = this.CartService.getDetail();
    }
}