import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit{

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.courseService.list();
  }
}
