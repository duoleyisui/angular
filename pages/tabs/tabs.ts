import { Component } from '@angular/core';

import { HomePage } from '../home/home';

import { TwoPage } from '../two/two';

import { FabuPage } from '../fabu/fabu';
import { XiaoxiPage } from '../xiaoxi/xiaoxi';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FabuPage;
  tab3Root = TwoPage;
  tab4Root = XiaoxiPage;
  tab5Root = MePage;

  constructor() {

  }
}
