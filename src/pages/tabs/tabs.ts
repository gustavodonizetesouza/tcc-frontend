import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = ContactPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
