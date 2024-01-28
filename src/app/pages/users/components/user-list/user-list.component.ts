import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GitHubUser } from 'src/app/core/models/github-user.model';

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers(this.currentPage, this.perPage, this.searchQuery).subscribe((data: any) => {
      this.users = data.items;
    });
  }

  handlePageChange(page: number): void {
    this.currentPage = page;
    this.getUsers();
  }

  searchUsers(): void {
    this.currentPage = 1;
    this.getUsers();
  }

}
