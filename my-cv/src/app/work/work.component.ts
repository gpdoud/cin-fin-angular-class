import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  jobs = [
    {
      company: "MAX Technical Training",
      title: "Sr. Instructor",
      location: "Cincinnati, OH",
      duration: "2017 - present",
      accomplishments: [
        "Enhanced the curriculum.",
        "Learned new technology.",
        "Did anything else the boss requested."
      ]
    },
    {
      company: "The Iron Yard",
      title: "Sr. Instructor",
      location: "Cincinnati, OH",
      duration: "2016 - 2017",
      accomplishments: [
        "Traveled to Maryland.",
        "Taught the staff about Windows & .NET.",
        "Did anything else the boss requested."
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
