import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserRoutingModule } from '../pages/users/user-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    NavbarComponent,
    UserCardComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
