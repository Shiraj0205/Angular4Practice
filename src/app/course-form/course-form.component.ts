import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  constructor() { }

  categories = [
    { id : "1", name : "Development"},
    { id : "2", name : "Business"},
    { id : "3", name : "QA"}
  ];

  submit(f){
    console.log(f.value);
  }

}
