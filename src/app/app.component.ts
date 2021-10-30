import { HomePage } from './../pages/home/home';
import { PagesRegisterPage } from './../pages/pages-register/pages-register';
import { PagesSigninPage } from './../pages/pages-signin/pages-signin';
import { PagesContactusPage } from './../pages/pages-contactus/pages-contactus';
import { PagesOtherservicesPage } from './../pages/pages-otherservices/pages-otherservices';
import { PagesGalleryPage } from './../pages/pages-gallery/pages-gallery';
import { PagesClientPage } from './../pages/pages-client/pages-client';
import { PagesJobsPage } from './../pages/pages-jobs/pages-jobs';
import { PagesAboutusPage } from './../pages/pages-aboutus/pages-aboutus';
import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';



//import { ListPage } from '../pages/list/list';
import { PagesJobseekerzoneloginPage } from '../pages/pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import { PagesJobseekerzoneregistrePage } from '../pages/pages-jobseekerzoneregistre/pages-jobseekerzoneregistre';
import { StorageserviceProvider, User } from '../providers/storageservice/storageservice';
import { PagesEmployerHomePage } from '../pages/pages-employer-home/pages-employer-home';
import { PagesEmployerzoneloginPage } from '../pages/pages-employerzonelogin/pages-employerzonelogin';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  users: User[] = [];
  Roles: string = '';
  IsLogin: boolean = false;

  pages: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen
    , private storageservice: StorageserviceProvider, private androidPermissions: AndroidPermissions,
    private permone : AndroidPermissions, private permtwo: AndroidPermissions, public events: Events,public menuCtrl: MenuController) {
    this.initializeApp();
    


    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, isVisible: true, iconsname: 'home' },
      { title: 'ABOUT US', component: PagesAboutusPage, isVisible: true, iconsname:'people' },
      { title: 'JOBS', component: PagesJobsPage, isVisible: true, iconsname:'list' },
      { title: 'CLIENTS', component: PagesClientPage, isVisible: true, iconsname:'person' },
      { title: 'GALLERY', component: PagesGalleryPage , isVisible: true, iconsname:'images'},
      { title: 'OTHER SERVICES', component: PagesOtherservicesPage, isVisible: true, iconsname:'thumbs-up' },
      { title: 'CONTACT US', component: PagesContactusPage, isVisible: true, iconsname:'card' },
      { title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' }

     
      // { title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' }
    ];

    this.loadUsers();

    

    events.subscribe('login', (pagedata, logintrue) => {
      this.pages = pagedata;
      this.IsLogin = logintrue;
    });
    

  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.INTERNET).then(
        (result) => {
          if(!result.hasPermission){
            this.androidPermissions.requestPermission
            (this.androidPermissions.PERMISSION.INTERNET);
          } 
      },
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.INTERNET)
    );
    this.permone.checkPermission(this.permone.PERMISSION.READ_EXTERNAL_STORAGE).then(
      (result) => {
        if(!result.hasPermission){
          this.permone.requestPermission
          (this.permone.PERMISSION.READ_EXTERNAL_STORAGE);
        } 
      },
        err => this.permone.requestPermission(this.permone.PERMISSION.READ_EXTERNAL_STORAGE)
    ); 
    this.permtwo.checkPermission(this.permtwo.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      (result) => {
        if(!result.hasPermission){
          this.permtwo.requestPermission
          (this.permtwo.PERMISSION.WRITE_EXTERNAL_STORAGE);
        } 
      },
        err => this.permtwo.requestPermission(this.permtwo.PERMISSION.WRITE_EXTERNAL_STORAGE)
    ); 
    });
  }

  logout(){
    this.storageservice.clear();
    let pages1: Array<{title: string, component: any, isVisible: boolean, iconsname: string}>;

    pages1 = [
      { title: 'HOME', component: HomePage, isVisible: true, iconsname: 'home' },
      { title: 'ABOUT US', component: PagesAboutusPage, isVisible: true, iconsname:'people' },
      
      { title: 'CLIENTS', component: PagesClientPage, isVisible: true, iconsname:'person' },
      { title: 'GALLERY', component: PagesGalleryPage , isVisible: true, iconsname:'images'},
      { title: 'OTHER SERVICES', component: PagesOtherservicesPage, isVisible: true, iconsname:'thumbs-up' },
      { title: 'CONTACT US', component: PagesContactusPage, isVisible: true, iconsname:'card' },
      { title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' }

     
      
    ];

    this.events.publish('login', pages1, false);
    this.nav.setRoot(HomePage);
  }


  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
      if(this.users != null && this.users.length > 0){
        this.Roles = this.users[0].Roles;
        if(this.Roles == ''){
          this.IsLogin = false;
        }else{
          this.IsLogin = true;
        }

        if(this.Roles != '' && this.Roles == 'Employer'){
          this.pages.push({ title: 'JOB SEEKER ZONE', component: PagesRegisterPage, isVisible: true, iconsname:'people' });
          
        }else{
          this.pages.push({ title: 'EMPLOYER ZONE', component: PagesSigninPage, isVisible: true, iconsname:'people' });
        }
      }
    });
  }

 /*  openPage(pagedata){
    if(pagedata.title == "New Order"){
      this.router.navigate(['/home/neworder']);
    }else if(pagedata.title == "Ongoing Order"){
      this.router.navigate(['/home/ongoingorder']);
    }else if(pagedata.title == "Completed Order"){
      this.router.navigate(['/home/completedorder']);
    }else if(pagedata.title == "Cancelled Order"){
      this.router.navigate(['/home/cancelledorder']);
    }else if(pagedata.title == "Account"){
      this.router.navigate(['/home/account']);
    }
  } */
  


   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Home'){
      if(this.users.length > 0 && this.users[0].Roles == 'Employer'){
        this.nav.setRoot(PagesEmployerHomePage);
      }else{
        this.nav.setRoot(HomePage);
      }
    }else if(page.title == 'JOB SEEKER ZONE'){
      this.nav.setRoot(HomePage);
    }else if(page.title == 'EMPLOYER ZONE'){
      this.nav.push(PagesEmployerzoneloginPage);
    }else{
      this.nav.setRoot(page.component);
    }
    this.toggleMenu();
    
  } 

  SignIn(){
    this.toggleMenu();
    this.nav.push(PagesJobseekerzoneloginPage);
  }

  Register(){
    this.toggleMenu();
    this.nav.push(PagesJobseekerzoneregistrePage);
  }
}
