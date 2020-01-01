import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {
  schools = [
    "Athenaeum of Ohio, Master Certificate LPM, 2016",
    "University of Cincinnati, BS IPS, 1985"
  ];

  constructor() { }

  ngOnInit() {
  }

}
