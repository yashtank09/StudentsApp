package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.services.StudentServices;

@RestController
@RequestMapping("/students/")
public class StudentController {
	
	@Autowired
	StudentServices studentService;
	
	@GetMapping("/debug/")
	public void debug() {
		System.out.println("Debug method called...");
	}
	
	@GetMapping("/show/")
	public List<Student> getAll(){
		return studentService.getAllStudents();
	}
	
	@PostMapping("/add/")
	public Student addStudent(@RequestBody Student students) {
		return studentService.addStudent(students);
	}
}