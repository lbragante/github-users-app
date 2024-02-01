# Estrutura do projeto

## /core:
Contém componentes, serviços e módulos fundamentais que são compartilhados em toda a aplicação. Inclui componenets como o navbar, footer, loading, services, interceptors, models e o Core Module que agrupa esses recursos.

|-- app
|   |-- core
|   |   |-- components
|   |   |   |-- footer
|   |   |   |   |-- footer.component.css
|   |   |   |   |-- footer.component.html
|   |   |   |   |-- footer.component.spec.ts
|   |   |   |   |-- footer.component.ts
|   |   |   |-- loading
|   |   |   |   |-- loading.component.css
|   |   |   |   |-- loading.component.html
|   |   |   |   |-- loading.component.spec.ts
|   |   |   |   |-- loading.component.ts
|   |   |   |-- navbar
|   |   |   |   |-- navbar.component.css
|   |   |   |   |-- navbar.component.html
|   |   |   |   |-- navbar.component.spec.ts
|   |   |   |   |-- navbar.component.ts
|   |   |-- interceptors
|   |   |   |-- loading.interceptor.ts
|   |   |-- models
|   |   |   |-- alert.model.model.ts
|   |   |   |-- github-user.model.model.ts
|   |   |   |-- links-navbar.model.model.ts
|   |   |-- services
|   |   |   |-- loading.service.ts
|   |   |-- core.module.ts

## /pages: 
Contém os componentes que representam páginas específicas, e cada um com seu módulo.

|-- app
|   |-- pages
|   |   |-- about
|   |   |   |-- componentes
|   |   |   |   |-- about
|   |   |   |   |   |-- about.component.css
|   |   |   |   |   |-- about.component.html
|   |   |   |   |   |-- about.component.spec.ts
|   |   |   |   |   |-- about.component.ts
|   |   |   |-- about-routing.module.ts
|   |   |   |-- about.module.ts
|   |   |-- users
|   |   |   |-- componentes
|   |   |   |   |-- search-user
|   |   |   |   |   |-- search-user.component.css
|   |   |   |   |   |-- search-user.component.html
|   |   |   |   |   |-- search-user.component.spec.ts
|   |   |   |   |   |-- search-user.component.ts
|   |   |   |   |-- user-list
|   |   |   |   |   |-- alerts.config.ts
|   |   |   |   |   |-- user-list.component.css
|   |   |   |   |   |-- user-list.component.html
|   |   |   |   |   |-- user-list.component.spec.ts
|   |   |   |   |   |-- user-list.component.ts
|   |   |   |-- componentes
|   |   |   |   |-- user.service.spec.ts
|   |   |   |   |-- user.service.ts
|   |   |   |-- user-routing.module.ts
|   |   |   |-- user.module.ts

## /shared:
Componentes e outros recursos compartilhados em toda a aplicação, mas que não pertencem necessariamente ao core. Inclui o Shared Module que agrupa esses recursos.

|   |-- shared
|   |   |-- components
|   |   |   |-- alert
|   |   |   |   |-- alert.component.ts
|   |   |   |   |-- alert.component.html
|   |   |   |   |-- alert.component.scss
|   |   |   |-- pagination
|   |   |   |   |-- pagination.component.ts
|   |   |   |   |-- pagination.component.html
|   |   |   |   |-- pagination.component.scss
|   |   |   |-- user-card
|   |   |   |   |-- user-card.component.ts
|   |   |   |   |-- user-card.component.html
|   |   |   |   |-- user-card.component.scss
|   |   |-- shared.module.ts


# UserService
Responsável por interage com a API do GitHub para recuperar informações sobre usuários

## Método: getAllUsers(page: number, perPage: number): Observable<GitHubUser>
Recupera uma lista de usuários do GitHub.

## Parâmetros:
page (number): Número da página a ser recuperada.
perPage (number): Número de usuários por página.


## Método: getUserByUsername(username: string): Observable<GitHubUser>
Recupera informações sobre um usuário específico do GitHub com base no nome de usuário.

## Parâmetros:
username (string): Nome de usuário do GitHub.


# GithubUsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
