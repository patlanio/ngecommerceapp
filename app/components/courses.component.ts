import {Component, OnInit} from '@angular/core';
import {Course} from '../common/course';
import {ApiService} from '../services/api.services';
import {AuthService} from '../services/auth.service';
import {ApiObservable} from '../services/api.observable.service';

@Component({
    selector: 'courses',
    template:
    `
        <h2>{{title}}</h2>
        <div class="courses_list">
            <coursebox
                [course]="course_info"
                *ngFor = "let course_info of courses"
            ></coursebox>
        </div>
        <cart></cart>
    `,
    providers: [ApiService, AuthService, ApiObservable]
})

export class CoursesComponent implements OnInit {
    title: string = 'Cursos disponibles'
    courses: Course[]

    constructor(
        private ApiService: ApiService,
        private auth: AuthService,
        private ApiObservable: ApiObservable
    ){
    }

    getCourses() {
        this.ApiService.getCourses().then(
            courses => this.courses = courses
        )

        // ------- OBSERVABLE --------
        // this.ApiObservable.getCourses().subscribe(
        //     data => { this.courses = data },
        //     error => console.log(error)
        // )
    }

    ngOnInit() {
        this.auth.check()
        this.getCourses()
    }
}