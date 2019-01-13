import { Component } from '@angular/core';
import { fade } from './../../app/animations';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // animation: [
  //   fade
  // ]
})
export class HomePage {

  apiUrl: string = '?format=json&key=03f39d09';
  responseData: any;
  retorno: any;
  CAC: any = {
    name: "",
    location: "",
    variation: ""
  };
  IBOVESPA: any = {
    name: "",
    location: "",
    variation: ""
  };

  NASDAQ: any = {
    name: "",
    location: "",
    variation: ""
  };

  NIKKEI: any = {
    name: "",
    location: "",
    variation: ""
  };
  show: boolean;
  isActive: boolean;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
    this.loadAPi();
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

        this.CAC.name = this.retorno.stocks.CAC.name;
        this.CAC.location = this.retorno.stocks.CAC.location;
        this.CAC.variation = this.retorno.stocks.CAC.variation;

        this.IBOVESPA.name = this.retorno.stocks.IBOVESPA.name;
        this.IBOVESPA.location = this.retorno.stocks.IBOVESPA.location;
        this.IBOVESPA.variation = this.retorno.stocks.IBOVESPA.variation;

        this.NASDAQ.name = this.retorno.stocks.NASDAQ.name;
        this.NASDAQ.location = this.retorno.stocks.NASDAQ.location;
        this.NASDAQ.variation = this.retorno.stocks.NASDAQ.variation;

        this.NIKKEI.name = this.retorno.stocks.NIKKEI.name;
        this.NIKKEI.location = this.retorno.stocks.NIKKEI.location;
        this.NIKKEI.variation = this.retorno.stocks.NIKKEI.variation;

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
