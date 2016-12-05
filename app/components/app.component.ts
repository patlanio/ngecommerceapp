import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector : 'my-app',
  template:
  `
    <header>
      Tienda de cursos
      <div>
        <a *ngIf="!auth.session" routerLink="login" >Iniciar sesion</a>
        <a *ngIf="auth.session" (click)="logout()" >Cerrar sesion</a>
      </div>
    </header>
    <nav>
      <a routerLink="">Inicio</a>
      <a routerLink="courses">Cursos</a>
    </nav>
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
  providers: [CartService, AuthService]
})

export class AppComponent implements OnInit {
  user: boolean

  constructor(private auth: AuthService) {
    
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }

}