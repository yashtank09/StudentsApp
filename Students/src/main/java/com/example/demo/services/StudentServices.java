package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentServices {
	
	@Autowired
	StudentRepository studentRepo;
	
	public List<Student> getAllStudents(){
		return studentRepo.findAll();
	}
	
	public Student addStudent(Student student) {
		return studentRepo.save(student);
	}
}
