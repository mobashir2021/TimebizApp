import { PagesForgotpasswordPage } from './../pages-forgotpassword/pages-forgotpassword';
import { PagesRegisterPage } from './../pages-register/pages-register';
import { PagesContactusPage } from './../pages-contactus/pages-contactus';
import { PagesOtherservicesPage } from './../pages-otherservices/pages-otherservices';
import { PagesGalleryPage } from './../pages-gallery/pages-gallery';
import { PagesClientPage } from './../pages-client/pages-client';
import { PagesAboutusPage } from './../pages-aboutus/pages-aboutus';
import { StorageserviceProvider, User } from './../../providers/storageservice/storageservice';
import { PagesEmployerzoneregisterPage } from './../pages-employerzoneregister/pages-employerzoneregister';

import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';

import { Storage } from "@ionic/storage";
import { PagesEmployerHomePage } from '../pages-employer-home/pages-employer-home';
import * as Constants from "../constants";
/**
 * Generated class for the PagesEmployerzoneloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-employerzonelogin',
  templateUrl: 'pages-employerzonelogin.html',
})
export class PagesEmployerzoneloginPage {

  Username: string = '';
  Password : string = '';
  Address: string = '';
  District: string = '';
  apiUrl: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizEmployerLogin';
  items: any;
  result : JSON;
  newUser: User = <User>{};
  users: User[] = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageserviceProvider, 
    private http: HTTP,private plt: Platform, private toastctl : ToastController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesEmployerzoneloginPage');
  }

  RegisterNow(){
    this.navCtrl.push(PagesEmployerzoneregisterPage);
  }

  loadUsers(){
    this.storage.getItems().then(users => {
      this.users = users;
      let pages: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

      pages = [
        { title: 'HOME', component: PagesEmployerHomePage, isVisible: true, iconsname: 'home' },
        { title: 'ABOUT US', component: PagesAboutusPage, isVisible: true, iconsname:'people' },
        { title: 'CLIENTS', component: PagesClientPage, isVisible: true, iconsname:'person' },
        { title: 'GALLERY', component: PagesGalleryPage , isVisible: true, iconsname:'images'},
        { title: 'OTHER SERVICES', component: PagesOtherservicesPage, isVisible: true, iconsname:'thumbs-up' },
        { title: 'CONTACT US', component: PagesContactusPage, isVisible: true, iconsname:'card' },
        { title: 'JOB SEEKER ZONE', component: PagesRegisterPage, isVisible: true, iconsname:'people' }
      ];
      this.events.publish('login', pages, true);

        this.navCtrl.setRoot(PagesEmployerHomePage);
      
      
    });
  }

  addUser(){
    this.storage.addItems(this.newUser).then(item => {
      this.newUser = <User>{};
      this.loadUsers();
    });
  }

  EmployerzoneLogin(){
    
    if(this.Password == '' || this.Username == ''){
      alert('Kindly provide details');
}else{
  
  this.http.get(this.apiUrl, {'Username': this.Username, 'Password': this.Password}, {})
  .then(data => {

    var itemstest = JSON.stringify(data.data);
    var tempdata = JSON.parse(itemstest);
    this.items = JSON.parse(tempdata);
    
    
    

    //alert(this.items);
    if(this.items.Address == "No data exists"){
      alert('Kindly provide correct details');
    }else{
      
  
      
  
        this.storage.clear();

        
  
        this.newUser.Userid = this.items.Userid;
        this.newUser.Email = this.items.Email;
        this.newUser.Password = this.items.Password;
        this.newUser.Mobileno = this.items.Mobileno;
        this.newUser.District = this.items.District;
        this.newUser.Roles = this.items.Roles;
        this.newUser.Companyname = this.items.Companyname;
        this.newUser.Companyid = this.items.Companyid;
        this.newUser.Address = this.items.Address;
        
        this.addUser();
        
    }

    

    
    

  })
  .catch(error => {

    alert(JSON.stringify(error));

  });
}
    

    
  
  }

}
