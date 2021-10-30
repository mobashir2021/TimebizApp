import { PagesJobseekerzoneloginPage } from './../pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import { PagesEmployerzoneregisterPage } from './../pages-employerzoneregister/pages-employerzoneregister';
import { PagesJobproviderRegisterPage } from './../pages-jobprovider-register/pages-jobprovider-register';
import { PagesJobproviderSigninPage } from './../pages-jobprovider-signin/pages-jobprovider-signin';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PagesJobseekerzoneregistrePage } from '../pages-jobseekerzoneregistre/pages-jobseekerzoneregistre';

/**
 * Generated class for the PagesRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-register',
  templateUrl: 'pages-register.html',
})
export class PagesRegisterPage {

  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesRegisterPage');
  }

  JobseekerRegister(){
    this.navCtrl.setRoot(PagesJobseekerzoneloginPage);
  }

  JobproviderRegister(){
    this.navCtrl.setRoot(PagesJobseekerzoneregistrePage);
  }

}
