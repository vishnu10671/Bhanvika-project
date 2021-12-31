import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tourism';
  iscolor: boolean = true;
  logout() {
    localStorage.removeItem('isAuthorize');
    alert(' logout successfuly');
  }
}
