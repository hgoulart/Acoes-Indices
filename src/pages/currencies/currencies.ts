import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-currencies',
  templateUrl: 'currencies.html',
  animations: [

    trigger('fadeIn',[
      transition('void => *', [
        style({opacity: .2}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class CurrenciesPage {

  apiUrl: string = '?format=json&key=03f39d09';
  responseData: any;
  retorno: any;
  ARS: any = {
    buy: "",
    name: "",
    sell: "",
    variation: ""
  };
  BTC: any = {
    buy: "",
    name: "",
    sell: "",
    variation: ""
  };
  EUR: any = {
    buy: "",
    name: "",
    sell: "",
    variation: ""
  };
  GBP: any = {
    buy: "",
    name: "",
    sell: "",
    variation: ""
  };
  USD: any = {
    buy: "",
    name: "",
    sell: "",
    variation: ""
  };
  show: boolean;
  isActive: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider) {
    this.loadAPi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrenciesPage');
    
  }

  ionViewWillLeave(){
    this.show = false;
    this.isActive = false;
    this.retorno = {};
    console.log(this.isActive);
  }
  ionViewWillEnter(){
    this.show = true;
    this.isActive = true;
    console.log(this.isActive);
  }
  loadAPi(){

    let http = this.dataProvider.getAPI(this.apiUrl);

    http.subscribe(
      data => {
        this.responseData = '';
        this.responseData = data;
        this.retorno = this.responseData.results;


        this.ARS.buy = this.retorno.currencies.ARS.buy;
        this.ARS.name = this.retorno.currencies.ARS.name;
        this.ARS.sell = this.retorno.currencies.ARS.sell;
        this.ARS.variation = this.retorno.currencies.ARS.variation / 100;

        this.BTC.buy = this.retorno.currencies.BTC.buy;
        this.BTC.name = this.retorno.currencies.BTC.name;
        this.BTC.sell = this.retorno.currencies.BTC.sell;
        this.BTC.variation = this.retorno.currencies.BTC.variation / 100;

        this.EUR.buy = this.retorno.currencies.EUR.buy;
        this.EUR.name = this.retorno.currencies.EUR.name;
        this.EUR.sell = this.retorno.currencies.EUR.sell;
        this.EUR.variation = this.retorno.currencies.EUR.variation / 100;

        this.GBP.buy = this.retorno.currencies.GBP.buy;
        this.GBP.name = this.retorno.currencies.GBP.name;
        this.GBP.sell = this.retorno.currencies.GBP.sell;
        this.GBP.variation = this.retorno.currencies.GBP.variation / 100;

        this.USD.buy = this.retorno.currencies.USD.buy;
        this.USD.name = this.retorno.currencies.USD.name;
        this.USD.sell = this.retorno.currencies.USD.sell;
        this.USD.variation = this.retorno.currencies.USD.variation / 100;

        console.log(this.retorno);
        // console.log(this.ARS);
      },
      err => {
        // this.authService.hideLoading();
        // this.openModalErro(err.status+' - '+err.statusText);
        console.log(err);
      }
    );
  }
}
