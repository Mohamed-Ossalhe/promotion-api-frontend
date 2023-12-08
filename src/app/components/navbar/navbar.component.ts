import { Component } from '@angular/core';
import { navLink } from 'src/app/types/navLink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent {
  MARJANE_LOGO_WHITE: string = "../../../assets/svg/marjane-logo-white.svg";
  navActive: boolean = false;

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
