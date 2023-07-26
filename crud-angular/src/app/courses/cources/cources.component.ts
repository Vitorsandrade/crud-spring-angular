import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit{

  courses: Course[] = [
    {_id: "1", name:'Angular', category: 'Front-End'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {

  }
}
