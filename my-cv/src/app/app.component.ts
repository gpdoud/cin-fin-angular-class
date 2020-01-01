import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string = "Greg Doud";
  address: string = "4900 Parkway Dr.";
  city: string = "Mason";
  state: string = "OH";
  zip: string = "45040";
  goal: string = "To become a boot camp and Angular instructor.";
}
