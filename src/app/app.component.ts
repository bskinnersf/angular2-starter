/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav class="container">
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./signup'] ">
          Signup
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>

    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <div class="container">
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    </div>

    <footer class="container">
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <span>Angular 2 + Baqend by <a [href]="baqend">@Baqendcom</a></span>
      <div>
        <a [href]="baqend">
          <img [src]="angularbaqendLogo" style="max-width: 400px; margin: auto; display: block">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  angularbaqendLogo = 'assets/Angular+Baqend.svg';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  baqend = 'https://www.baqend.com';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
