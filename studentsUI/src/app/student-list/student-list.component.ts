import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  
  students: any = [];

  constructor(private http: HttpClient){ }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8081/students/show/').subscribe((data: any=[]) => {
      this.students = data;
    });
  }
}
