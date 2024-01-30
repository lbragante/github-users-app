import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GitHubUser } from 'src/app/core/models/github-user.model';
import { AlertModel } from 'src/app/core/models/alert.model';
import * as AlertConfig from './alerts.config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: GitHubUser[] = [];
  currentPage: number = 1;
  perPage: number = 20;
  searchQuery: string = '';
  alert: AlertModel = { title: '', description: '', context: 'info' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.resetAlert();
    this.userService.getAllUsers(this.currentPage, this.perPage).subscribe({
      next: (data: any) => {
        this.users = data.items;
      },
      error: (error: any) => {
        this.users = [];
        console.error(error);
        this.setAlert(AlertConfig.ERROR_ALERT);
      }
    });
  }

  getUserByUsername(username: string): void {
    this.resetAlert();
    this.userService.getUserByUsername(username).subscribe({
      next: (data: any) => {
        this.users = data.items;
        this.setAlert(AlertConfig.SUCCESS_ALERT);
      },
      error: (error: any) => {
        this.users = [];
        console.error(error);
        this.setAlert(AlertConfig.NOT_FOUND_USER_ALERT);
      }
    });
  }

  private setAlert(alert: AlertModel): void {
    this.alert = { ...alert };
  }

  private resetAlert(): void {
    this.alert = { title: '', description: '', context: 'info' };
  }

  onSearchQueryChange(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.getUserByUsername(this.searchQuery);
  }

  handlePageChange(page: number): void {
    this.currentPage = page;
    this.getAllUsers();
  }

}
