import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({

  selector: 'authors',
  template: `
    <h2> {{ getTitle() }} </h2>
    <ul>

        <li *ngFor='let author of authors'>
            {{ author }}
        </li>

    </ul>

  `

})

export class AuthorsComponent {
    title = 'List of Authors';
    authors;
    getTitle(){
        return this.title;
    }

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }
}