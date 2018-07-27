import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any;
  erro: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public menu: MenuController, 
    private http: HttpClient, 
    public loadingCtrl: LoadingController, 
    public auth: AuthProvider) {
    //this.menu.enable(false, 'menu1');
    this.user = {
      username: "",
      senha: ""
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false, 'menu1');
  }

  fazerLogin() {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loading.present();
    this.http.post("http://192.168.0.115:810/api/loginapi", this.user).subscribe((res: any) => {
      console.log("sucesso", res);
      if (!res.authenticated) {
        this.erro = true;
      }
      else {
        this.erro = false;
        this.auth.saveToken(res.accessToken);
        this.navCtrl.setRoot(HomePage);
      }
      loading.dismiss();
    },
      (err) => {
        console.log("erro", err);
        this.erro = true;
        loading.dismiss();
      });
  }
}
