import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-profile-app';
  count = 0;

  onClick(v: number): void {
    this.count += v;
  }
}
