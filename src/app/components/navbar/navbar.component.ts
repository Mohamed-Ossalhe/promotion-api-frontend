import { Component } from '@angular/core';
import { navLink } from 'src/app/types/navLink';
import {User} from "../../interfaces/user";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent {
  private user: User | undefined;
  MARJANE_LOGO_WHITE: string = "../../../assets/svg/marjane-logo-white.svg";
  navActive: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.user = this._authService.getUser();
  }

  navigationLinks: Array<navLink> = [
    {
      url: '/',
      icon: 'bx bxs-home',
      label: 'home'
    },
    {
      url: '/stats',
      icon: 'bx bx-stats',
      label: 'stats'
    },
    {
      url: '/promotions',
      icon: 'bx bxs-offer',
      label: 'promotions'
    },
    {
      url: '/dashboard',
      icon: 'bx bxs-dashboard',
      label: 'dashboard'
    },
    {
      url: '/login',
      icon: 'bx bx-log-in-circle',
      label: 'login'
    }
  ]
}
