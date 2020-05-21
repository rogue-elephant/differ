import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'DIFFER';
  public sideNavOpen = false;

  constructor(private themeService: ThemeService) {
  }

  public toggleSideNav = () => this.sideNavOpen = !this.sideNavOpen;

  public toggleTheme = () => this.themeService.toggleTheme();
}
