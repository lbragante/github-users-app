import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/components/about/about.component';
import { UserListComponent } from './pages/users/components/user-list/user-list.component';
import { SharedModule } from './shared/shared.module';
import { SearchUserComponent } from './pages/users/components/search-user/search-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './core/components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    SearchUserComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
