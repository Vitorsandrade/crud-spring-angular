import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourcesComponent } from './cources/cources.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CourcesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
