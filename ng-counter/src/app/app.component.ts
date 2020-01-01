import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nbr: number = 0;
  style: string = "font-color-black font-weight-normal font-style-normal";

  inc(): void {
    this.nbr++;
    this.display();
  }
  dec(): void {
    this.nbr--;
    this.display();
  }
  display(): void {
    this.style = '';
    this.style += this.nbr % 2 == 0 ? " color-red" : " color-black";
    this.style += this.nbr % 3 == 0 ? " font-weight-bold" : " font-weight-normal";
    this.style += this.nbr % 7 == 0 ? " font-style-italic" : " font-style-normal";
  }

  ngOnInit() {
    this.display()
  }
}
