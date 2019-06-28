import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
 // selector: 'boas',
//templateUrl: '/novo.html'
templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Pontos Turisticos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Tundavala',
      url: '/segunda',
      icon: 'pin'
    },
    {
      title: 'Cabo Ledo',
      url: '/terca',
      icon: 'pin'
    },
    {
      title: 'Serra da Leba',
      url: '/quarta',
      icon: 'pin'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
