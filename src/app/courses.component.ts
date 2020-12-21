import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // basic CSS selector: <courses> "courses" OR <div class="courses"> ".courses" OR <div id="courses"> "#courses"
    template: `

        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor='let course of courses'> 
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    getTitle() {
        return this.title;
    }
    constructor(service: CoursesService) {
        //this will tightly coupled the class in implementation. 
        // i wont be able to change this at runtime and over time this will get overcomplicated if i have
        // a LOT of instance of this
        
        // let service = new CoursesService(); 
        
        this.courses = service.getCourses();
    }

    // Logic for calling an HTTP service
}
