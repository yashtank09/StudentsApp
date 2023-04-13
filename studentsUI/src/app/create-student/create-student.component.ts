import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  private baseUrl = 'http://127.0.0.1:8081/studetns/add/';

  constructor(private http: HttpClient) {}

  createStudent() {
    const data = {name:this.name, age:this.age, mobile:this.mobile, address: this.address}
    this.http.post(this.baseUrl, data).subscribe( () => {
      this.name = '';
      this.age = 0;
      this.mobile = 0;
      this.address = '';
    });
    console.log(data);
    // console.log(request);
  }
}
