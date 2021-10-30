import { PagesJobseekerzoneloginPage } from './../pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import { HomePage } from './../home/home';
import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Storage } from "@ionic/storage";

/**
 * Generated class for the PagesJobseekerzoneregistrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-jobseekerzoneregistre',
  templateUrl: 'pages-jobseekerzoneregistre.html',
})
export class PagesJobseekerzoneregistrePage {

  Name : string = '';
  
  Mobileno: string = '';
  
  Email: string = '';
  Password : string = '';
  Address: string = '';
  District: string = '';
  Qualification: string = '';
  Experience: string = '';
  Skills: string = '';
  apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/TimebizJobSeekerzoneRegister';
  items: any;
  result : JSON;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, 
    private http: HTTP,private plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesJobseekerzoneregistrePage');
  }


  Login(){
    this.navCtrl.push(PagesJobseekerzoneloginPage);
  }

  JobseekerRegister(){
    if(this.Email == '' || this.Password == ''){
      alert('Kindly enter Email/Password');
    }else{
      this.http.get(this.apiUrl, {'Name': this.Name, 'username': 'a', 'email': this.Email, 'Password': this.Password,
      'Mobileno': this.Mobileno, 'Qualification': this.Qualification, 'Experience': this.Experience, 'Skills': this.Skills,
      'Address': this.Address, 'District': this.District, 'Gender': 'Male'}, {})
    .then(data => {

      alert('Registered Successfully!')
      this.navCtrl.push(PagesJobseekerzoneloginPage);


      })
    .catch(error => {

      alert(JSON.stringify(error));

    });
    }
    
  }

}
