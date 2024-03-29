import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { UserRoutingModule } from '../pages/users/user-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from '../core/components/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    PaginationComponent,
    AlertComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    NavbarComponent,
    UserCardComponent,
    PaginationComponent,
    AlertComponent,
    FooterComponent
  ]
})
export class SharedModule { }
