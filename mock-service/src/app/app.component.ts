import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  students: any[];

  constructor(private appsvc: AppService) {}

  ngOnInit() {
    this.appsvc.get().subscribe(
      objarr => {
        for(let s of objarr) {
          if(s.role == "Instructor") {s.color = "red"}
          if(s.role == "Director") {s.color = "green"}
          if(s.role == "Sales") {s.color = "blue"}
        }
        this.students = objarr;
        console.log(objarr);
      },
      err => {
        console.error(err);
      }
    );
  }
}
