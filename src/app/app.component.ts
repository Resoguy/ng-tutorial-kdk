import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTutorial';
  msg = 'My Message';
  subtitle: string = 'This is a subtitle';

  constructor() {

  }

  changeTitle(event: string) {
    console.log(event);
    this.title = 'My New Title';
  }
}
