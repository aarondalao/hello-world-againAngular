import{ Component } from '@angular/core';

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
    courses = ["courses1", "courses2", "courses3"];

    getTitle() {
        return this.title;
    }
}
