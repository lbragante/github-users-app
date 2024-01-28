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
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.users = [];
    this.alert = { title: '', description: '', context: 'danger' };

    this.userService.getAllUsers(this.currentPage, this.perPage)
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

  getUserByUsername(username: string): void {
    this.users = [];
    this.alert = { title: '', description: '', context: 'danger' };

    this.userService.getUserByUsername(username)
      .subscribe({
        next: (data: any) => {
          this.users = data.items;
          this.alert.title = 'Deu certo!';
          this.alert.description = `${this.users.length} usuário(s) encontrado(s)`;
          this.alert.context = 'success';
        },
        error: (error: any) => {
          console.error(error);
          this.alert.title = 'Erro ao listar os usuários';
          this.alert.description = 'Desculpe, ocorreu um erro inesperado ou nenhum usuário foi encontrado.';
          this.alert.context = 'danger';
        }
      });
  }

  onSearchQueryChange(searchQuery: string): void {
    this.searchQuery = searchQuery;
    this.getUserByUsername(this.searchQuery);
  }

  handlePageChange(page: number): void {
    this.currentPage = page;
    this.getAllUsers();
  }

  searchUsers(): void {
    this.currentPage = 1;
    this.getAllUsers();
  }

}
