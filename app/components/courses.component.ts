import {Component, OnInit} from '@angular/core';
import {Course} from '../common/course';
import {ApiService} from '../services/api.services';
import {AuthService} from '../services/auth.service';

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
    providers: [ApiService, AuthService]
})

export class CoursesComponent implements OnInit {
    title: string = 'Cursos disponibles'
    courses: Course[]

    constructor(private ApiService: ApiService, private auth: AuthService) {

    }

    getCourses() {
        this.ApiService.getCourses().then(
            courses => this.courses = courses
        )
    }

    ngOnInit() {
        this.auth.check()
        this.getCourses()
    }
}