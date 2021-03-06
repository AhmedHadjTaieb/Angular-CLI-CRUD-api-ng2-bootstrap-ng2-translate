import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(["fr", "en"]);
    translate.setDefaultLang('fr');
    let browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|en/) ? browserLang : 'fr');
  }
  translateEN(){
    this.translate.use('en');
  }
  translateFR(){
    this.translate.use('fr');

  }
}
