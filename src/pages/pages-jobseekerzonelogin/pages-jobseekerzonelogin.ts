import { PagesForgotpasswordPage } from './../pages-forgotpassword/pages-forgotpassword';
import { PagesSigninPage } from './../pages-signin/pages-signin';
import { PagesContactusPage } from './../pages-contactus/pages-contactus';
import { PagesOtherservicesPage } from './../pages-otherservices/pages-otherservices';
import { PagesGalleryPage } from './../pages-gallery/pages-gallery';
import { PagesClientPage } from './../pages-client/pages-client';
import { PagesAboutusPage } from './../pages-aboutus/pages-aboutus';
import { PagesJobseekerzoneregistrePage } from './../pages-jobseekerzoneregistre/pages-jobseekerzoneregistre';

import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from "@ionic/storage";
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';

/**
 * Generated class for the PagesJobseekerzoneloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-jobseekerzonelogin',
  templateUrl: 'pages-jobseekerzonelogin.html',
})
export class PagesJobseekerzoneloginPage {

  Username: string = '';
  Password: string = '';
  apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/TimebizLoginJobseeker';
  items: any;
  result : JSON;
  newUser: User = <User>{};
  users: User[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: StorageserviceProvider, 
    private http: HTTP ,private plt: Platform, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesJobseekerzoneloginPage');
  }

  RegisterNow(){
    this.navCtrl.push(PagesJobseekerzoneregistrePage);
  }

  loadUsers(){
    this.storage.getItems().then(users => {
      this.users = users;
      
    });
  }

  addUser(){
    this.storage.addItems(this.newUser).then(item => {
      this.newUser = <User>{};
      this.loadUsers();
    });
  }

  JobseekerLogin(){
    /* this.plt.ready().then(() => {

      

      let params = {'Username': this.Username, 'Password': this.Password};
    this.http.get(this.apiUrl,  {params : { 'Username': this.Username, 'Password': this.Password} }).subscribe(
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

    if(this.Username == '' || this.Password == ''){
      alert('Kindly provide details');
    }else{



    this.http.get(this.apiUrl, {'Username': this.Username, 'Password': this.Password}, {})
  .then(data => {

    var itemstest = JSON.stringify(data.data);
    var tempdata = JSON.parse(itemstest);
    this.items = JSON.parse(tempdata);

    if(this.items.Address == "No data exists"){
      alert('Kindly provide correct details');
    }else{

      let pages: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

    pages = [
      { title: 'HOME', component: HomePage, isVisible: true, iconsname: 'home' },
      { title: 'ABOUT US', component: PagesAboutusPage, isVisible: true, iconsname:'people' },
      
      { title: 'CLIENTS', component: PagesClientPage, isVisible: true, iconsname:'person' },
      { title: 'GALLERY', component: PagesGalleryPage , isVisible: true, iconsname:'images'},
      { title: 'OTHER SERVICES', component: PagesOtherservicesPage, isVisible: true, iconsname:'thumbs-up' },
      { title: 'CONTACT US', component: PagesContactusPage, isVisible: true, iconsname:'card' },
      { title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' }

     
      
    ];

    this.events.publish('login', pages, true);

    this.storage.clear();

      this.newUser.Userid = this.items.Userid;
      this.newUser.Email = this.items.Email;
      this.newUser.Password = this.items.Password;
      this.newUser.Mobileno = this.items.Mobileno;
      this.newUser.District = this.items.District;
      this.newUser.Roles = this.items.Roles;
      
      this.newUser.Address = this.items.Address;
      this.addUser();
    this.navCtrl.setRoot(HomePage);

    }

    

  })
  .catch(error => {

    alert(JSON.stringify(error));

  });
    

    
  
  }
}

}
