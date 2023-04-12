import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  name: string;
  age: number;
  mobile: number;
  address: string;

  private baseUrl = 'http://localhost:8080/studetns/';

  constructor(private http: HttpClient) {}

  createStudent() {
    
  }
}
