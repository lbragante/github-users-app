import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserRoutingModule } from '../pages/users/user-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
