import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Student } from '../student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  
  student: Student = new Student();

  private baseUrl = 'http://127.0.0.1:8081/students/add/';

  constructor(private http: HttpClient) {}

  createStudent() {
    const data = {name:this.student.name, age:this.student.age, mobile:this.student.mobile, address: this.student.address}
    this.http.post(this.baseUrl, data).subscribe( () => {
      this.student.name = '';
      this.student.age 
      this.student.mobile
      this.student.address = '';
    });
    console.log(data);
    // console.log(request);
  }
}
