import {Component, Input, trigger, state, style, transition, animate} from '@angular/core';
import {Course} from '../common/course';
import {CartService} from '../services/cart.service'
import {Router} from '@angular/router';


@Component({
    selector: 'coursebox',
    template:
    `
        <div class="course" [@courseState]="course.state" >
            <img [src] = "course.image" (click)="goToDetails(course)" />
            <h2>{{course.name}}</h2>
            <span class="price">
                {{course.price | currency: 'USD' : true : '1.2-2'}}
            </span>
            <button (click)="add(course)" >Agregar al carrito</button>
        </div>
    `,
    animations: [
        trigger('courseState', [
            state('inactive', style({
                backgroudColor: 'none',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroudColor: '#00FFFF',
                transform: 'scale(0.9)'
            }))
        ])
    ]
})

export class CourseBoxComponent {
    @Input()
    course: Course

    constructor(
        private CartService: CartService,
        private router: Router
    ) {
    }

    goToDetails(course: Course) {
        let link = ['/course', course.id];
        this.router.navigate(link);
    }

    add(course: Course ) {
        course.state = 'active'
        setTimeout( () => {course.state = 'inactive'} , 400)
        this.CartService.addToCart( course );
    }

}