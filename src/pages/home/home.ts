import { PagesSigninPage } from './../pages-signin/pages-signin';
import { PagesRegisterPage } from './../pages-register/pages-register';
import { PagesContactusPage } from './../pages-contactus/pages-contactus';
import { PagesOtherservicesPage } from './../pages-otherservices/pages-otherservices';
import { PagesGalleryPage } from './../pages-gallery/pages-gallery';
import { PagesClientPage } from './../pages-client/pages-client';
import { PagesAboutusPage } from './../pages-aboutus/pages-aboutus';
import { HTTP } from '@ionic-native/http/ngx';
import { PagesJobsPage } from './../pages-jobs/pages-jobs';

import { Component } from '@angular/core';
import { Events, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';
import { PagesEmployerHomePage } from '../pages-employer-home/pages-employer-home';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import * as Constants from "../constants";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchDistrictWithCat: string = '';
  searchCatWithDistrict : string = '';
  searchCompany: string = '';
  searchOnlyCategory:string = '';
  searchKeyword: string = '';
  response: any;
  users: User[] = [];
  apiUrlLoadCompany: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizLoadCompany';
  apiUrlsearchDistrictandCategory: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizJobSearchbyDistrictAndCategory';
  apiUrlsearchCompany: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizJobSearchbyCompany';
  apiUrlsearchKeywords: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizJobSearchbyKeyword';
  items: any;
  companyvalues : any;
  result : JSON;
  companynames : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HTTP,private plt: Platform, private storageservice: StorageserviceProvider, private toastctl : ToastController,
    public events : Events
    
    ) {
      
      
  }

 

  ionViewDidLoad(){
    this.loadUsers();
        this.http.get(this.apiUrlLoadCompany, {}, {})
    .then(data => {

      var itemstest = JSON.stringify(data.data);
      var testdata = JSON.parse(itemstest);
      this.companyvalues = JSON.parse(testdata);
      console.log(this.companyvalues);
      })
    .catch(error => {

      alert(JSON.stringify(error));

    });
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
      if(this.users != null && this.users.length > 0 && this.users[0].Roles == 'Employer'){
        this.navCtrl.setRoot(PagesEmployerHomePage);
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
      }else if(this.users != null && this.users.length > 0 && this.users[0].Roles == 'JobSeeker'){
        //this.navCtrl.setRoot(Home);
        let pages: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

    pages = [
      { title: 'HOME', component: PagesEmployerHomePage, isVisible: true, iconsname: 'home' },
      { title: 'ABOUT US', component: PagesAboutusPage, isVisible: true, iconsname:'people' },
      
      { title: 'CLIENTS', component: PagesClientPage, isVisible: true, iconsname:'person' },
      { title: 'GALLERY', component: PagesGalleryPage , isVisible: true, iconsname:'images'},
      { title: 'OTHER SERVICES', component: PagesOtherservicesPage, isVisible: true, iconsname:'thumbs-up' },
      { title: 'CONTACT US', component: PagesContactusPage, isVisible: true, iconsname:'card' },
      { title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' }

     
      
    ];

    this.events.publish('login', pages, true);
      }
    });
  }
  

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  slider = [
    {
      title : 'Live Your Dreams',
      description: 'Your dream career is just a click away',
      image: '../../assets/imgs/jobs7try1.png'
    },
    {
      title : 'Your Dream. We Work',
      description: 'We make your dream come true',
      image: '../../assets/imgs/jobs5try.png'
    },
    {
      title : 'Hiring made Simple',
      description: 'The elevator to perfect career',
      image: '../../assets/imgs/jobs6try.png'
    }
  ]


  SearchbyDistrictAndCategory(){
    let districtforsearch : string = '';
    let catforsearch: string = '';
    

    this.http.get(this.apiUrlsearchDistrictandCategory, {'district': this.searchDistrictWithCat, 'category': this.searchCatWithDistrict}, {})
    .then(data => {
      //alert(data.data);
      //alert(data);
      var itemstest = JSON.stringify(data.data);
      //alert(itemstest);
      var tempdata = JSON.parse(itemstest);
      
      this.items = JSON.parse(tempdata);
     
      
      
      console.log(this.items);

      this.navCtrl.push(PagesJobsPage, {items : this.items});
      })
    .catch(error => {

      alert(JSON.stringify(error));
    });
  }

  SearchbyCompany(){
    this.http.get(this.apiUrlsearchCompany, {'companyname': this.searchCompany}, {})
    .then(data => {

      var itemstest = JSON.stringify(data.data);
      
      var tempdata = JSON.parse(itemstest);
      this.items = JSON.parse(tempdata); 
      console.log(this.items);
      this.navCtrl.push(PagesJobsPage, {items : this.items});
      })
    .catch(error => {

      alert(JSON.stringify(error));

    });

  }

  SearchbyKeywords(){
    this.http.get(this.apiUrlsearchKeywords, {'keyword': this.searchKeyword}, {})
    .then(data => {

      var itemstest = JSON.stringify(data.data);
      
      var tempdata = JSON.parse(itemstest);
      this.items = JSON.parse(tempdata); 
      console.log(this.items);
      this.navCtrl.push(PagesJobsPage, {items : this.items});
      })
    .catch(error => {

      alert(JSON.stringify(error));

    });
  }

}
