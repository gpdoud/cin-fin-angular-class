import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello To the Angular class';
  name:string = "Greg";
  displayName: boolean = true;
  helpTimes: number[] = [5, 4, 5, 6, 7 ];
}
