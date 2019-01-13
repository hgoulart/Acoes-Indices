import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {

  apiUrl: string = '?format=json&key=03f39d09';
  responseData: any;
  retorno: any;
  bitstamp: any = {
    buy: "",
    last: "",
    name: "",
    sell: "",
    variation: ""
  };
  blockchain_info: any = {
    buy: "",
    last: "",
    name: "",
    sell: "",
    variation: ""
  };
  coinbase: any = {
    buy: "",
    last: "",
    name: "",
    sell: "",
    variation: ""
  };
  foxbit: any = {
    buy: "",
    last: "",
    name: "",
    sell: "",
    variation: ""
  };
  mercadobitcoin: any = {
    buy: "",
    last: "",
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
    console.log('BitcoinPage');
    
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

        this.bitstamp.buy = this.retorno.bitcoin.bitstamp.buy;
        this.bitstamp.last = this.retorno.bitcoin.bitstamp.last;
        this.bitstamp.name = this.retorno.bitcoin.bitstamp.name;
        this.bitstamp.sell = this.retorno.bitcoin.bitstamp.sell;
        this.bitstamp.variation = this.retorno.bitcoin.bitstamp.variation / 100;

        this.blockchain_info.buy = this.retorno.bitcoin.blockchain_info.buy;
        this.blockchain_info.last = this.retorno.bitcoin.blockchain_info.last;
        this.blockchain_info.name = this.retorno.bitcoin.blockchain_info.name;
        this.blockchain_info.sell = this.retorno.bitcoin.blockchain_info.sell;
        this.blockchain_info.variation = this.retorno.bitcoin.blockchain_info.variation / 100;

        this.mercadobitcoin.buy = this.retorno.bitcoin.mercadobitcoin.buy;
        this.mercadobitcoin.last = this.retorno.bitcoin.mercadobitcoin.last;
        this.mercadobitcoin.name = this.retorno.bitcoin.mercadobitcoin.name;
        this.mercadobitcoin.sell = this.retorno.bitcoin.mercadobitcoin.sell;
        this.mercadobitcoin.variation = this.retorno.bitcoin.mercadobitcoin.variation / 100;

        this.coinbase.buy = this.retorno.bitcoin.coinbase.buy;
        this.coinbase.last = this.retorno.bitcoin.coinbase.last;
        this.coinbase.name = this.retorno.bitcoin.coinbase.name;
        this.coinbase.sell = this.retorno.bitcoin.coinbase.sell;
        this.coinbase.variation = this.retorno.bitcoin.coinbase.variation / 100;

        this.foxbit.buy = this.retorno.bitcoin.foxbit.buy;
        this.foxbit.last = this.retorno.bitcoin.foxbit.last;
        this.foxbit.name = this.retorno.bitcoin.foxbit.name;
        this.foxbit.sell = this.retorno.bitcoin.foxbit.sell;
        this.foxbit.variation = this.retorno.bitcoin.foxbit.variation / 100;

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
