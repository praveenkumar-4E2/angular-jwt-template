import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule,
  ]
})
export class AdminModule { }
