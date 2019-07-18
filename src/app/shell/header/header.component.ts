import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService, I18nService } from '@app/core';

type MenuItem = {
  name:string,
  link:string,
  icon:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  get settingMenus(): MenuItem[]{
    let menus : MenuItem[] = [
      {
        name:'Sales Invoice',
        link:'/sales-invoice',
        icon:'fas fa-receipt'
      },
      {
        name:'Sales Payment',
        link:'/sales-payment',
        icon:'fas fa-money-bill'
      },
      {
        name:'Item Inventory',
        link:'/item-inventory',
        icon:'fas fa-box'
      },
      {
        name:'Customer',
        link:'/customer',
        icon:'fas fa-user'
      },
      {
        name:'Item',
        link:'/item',
        icon:'fas fa-shopping-basket'
      },
    ]
    return menus;
  }
}
