import{ Component } from '@angular/core';

@Component({
    selector: 'courses', // basic CSS selector: <courses> "courses" OR <div class="courses"> ".courses" OR <div id="courses"> "#courses"
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent {
    title = 'List of Courses';

    getTitle() {
        return this.title;
    }
}
