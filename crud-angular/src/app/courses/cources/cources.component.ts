import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit{

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {
  }

}
