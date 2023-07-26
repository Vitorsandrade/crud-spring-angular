import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CourcesComponent } from './cources/cources.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CourcesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule
  ]
})
export class CoursesModule { }
