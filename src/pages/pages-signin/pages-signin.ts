import { PagesEmployerzoneregisterPage } from './../pages-employerzoneregister/pages-employerzoneregister';

import { PagesJobseekerzoneregistrePage } from './../pages-jobseekerzoneregistre/pages-jobseekerzoneregistre';
import { PagesJobseekerzoneloginPage } from './../pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PagesEmployerzoneloginPage } from '../pages-employerzonelogin/pages-employerzonelogin';

/**
 * Generated class for the PagesSigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-signin',
  templateUrl: 'pages-signin.html',
})
export class PagesSigninPage {

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesSigninPage');
  }

  JobseekerLogin(){
    this.navCtrl.setRoot(PagesEmployerzoneloginPage);
  }

  JobproviderLogin(){
    this.navCtrl.setRoot(PagesEmployerzoneregisterPage);
  }

}
