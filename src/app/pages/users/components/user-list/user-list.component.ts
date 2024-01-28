import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GitHubUser } from 'src/app/core/models/github-user.model';
import { AlertModel } from 'src/app/core/models/alert.model';

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

  alert: AlertModel = {
    title: '',
    description: '',
    context: 'info'
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.alert = { title: '', description: '', context: 'danger' };

    this.userService.getUsers(this.currentPage, this.perPage, this.searchQuery)
      .subscribe({
        next: (data: any) => {
          this.users = data.items;
        },
        error: (error: any) => {
          console.error(error);
          this.alert.title = 'Erro ao listar os usuários';
          this.alert.description = 'Desculpe, ocorreu um erro inesperado. Por favor, tente novamente mais tarde.';
          this.alert.context = 'danger';
        }
      });
  }

  onSearchQueryChange(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.getUsers();
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
