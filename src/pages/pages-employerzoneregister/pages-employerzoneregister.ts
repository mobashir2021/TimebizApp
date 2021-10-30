import { PagesEmployerzoneloginPage } from './../pages-employerzonelogin/pages-employerzonelogin';
import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Storage } from "@ionic/storage";
import { PagesEmployerHomePage } from '../pages-employer-home/pages-employer-home';
import * as Constants from "../constants";


/**
 * Generated class for the PagesEmployerzoneregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-employerzoneregister',
  templateUrl: 'pages-employerzoneregister.html',
})
export class PagesEmployerzoneregisterPage {

  Companyname : string = '';
  Website : string = '';
  Mobileno: string = '';
  Phoneno: string = '';
  Email: string = '';
  Password : string = '';
  Address: string = '';
  District: string = '';
  apiUrl: string = Constants.API_ENDPOINT + 'Jobclubapi/TimebizEmployeezoneRegister';
  items: any;
  result : JSON;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, 
    private http: HTTP,private plt: Platform) {
  }


  Login(){
    this.navCtrl.push(PagesEmployerzoneloginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesEmployerzoneregisterPage');
  }

  JobseekerRegister(){
    
    
    
    this.http.get(this.apiUrl, {'companyname': this.Companyname, 'email': this.Email, 'website': this.Website,
      'Phoneno': this.Phoneno, 'address': this.Address, 'district': this.District}, {})
    .then(data => {

      /* console.log(data.status);
      console.log(data); // data received by server
      console.log(data.headers); */
      alert('Registered Successfully');
      this.navCtrl.push(PagesEmployerzoneloginPage);


      })
    .catch(error => {

      alert(JSON.stringify(error));

    });

    
    //this.plt.ready().then(() => {

      

      //let params = {'Username': this.Username, 'Password': this.Password};
    /* this.http.get(this.apiUrl,  {params : { 'Username': this.Username, 'Password': this.Password} }).subscribe(
      res => {
        var itemstest = JSON.stringify(res);
        this.items = JSON.parse(itemstest);
        console.log(this.items);
        this.navCtrl.setRoot(HomePage);

      },
      err => {
        console.log(err);
      }
    ); 
    }); */
  }

}
