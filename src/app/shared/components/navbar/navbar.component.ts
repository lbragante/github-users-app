import { Component } from '@angular/core';
import { NavbarLinks } from 'src/app/core/models/links-navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links: NavbarLinks[] = [
    { label: 'Usuários', route: '/usuarios' },
    { label: 'Sobre', route: '/sobre' }
  ];
}
