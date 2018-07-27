import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    private barcodeScanner: BarcodeScanner) { } 
  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(true, 'menu1');
  } 
  start() {
    
    var codigo = "41102812889-89";


    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });


  } 
}
