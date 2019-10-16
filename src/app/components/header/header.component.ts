import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actualRoute : string = "/home";

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

    /**
   * Swittches the language.
   * @param language
   */
  switchLanguage(language: string) {
    this.translateService.use(language);
  }

    /**
   * Sets the actual root.
   * @param actualRoute
   */
  setActualRoute(actualRoute: string) {
    this.actualRoute = actualRoute;
  }

}
