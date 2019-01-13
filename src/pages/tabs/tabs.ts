import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { BitcoinPage } from '../bitcoin/bitcoin';
import { CurrenciesPage } from '../currencies/currencies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BitcoinPage;
  tab3Root = CurrenciesPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
