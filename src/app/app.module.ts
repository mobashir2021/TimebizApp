import { PagesJobSeekerListPerjobPage } from './../pages/pages-job-seeker-list-perjob/pages-job-seeker-list-perjob';
import { PagesGetcandidatesPage } from './../pages/pages-getcandidates/pages-getcandidates';
import { PagesPostjobPage } from './../pages/pages-postjob/pages-postjob';
import { PagesEmployerSeekerDescriptionPage } from './../pages/pages-employer-seeker-description/pages-employer-seeker-description';
import { PagesEmployerProfilePage } from './../pages/pages-employer-profile/pages-employer-profile';
import { PagesRegisterPage } from './../pages/pages-register/pages-register';
import { PagesSigninPage } from './../pages/pages-signin/pages-signin';
import { PagesEmployerzoneregisterPage } from './../pages/pages-employerzoneregister/pages-employerzoneregister';
import { PagesEmployerzoneloginPage } from './../pages/pages-employerzonelogin/pages-employerzonelogin';
import { PagesOtherservicesPage } from './../pages/pages-otherservices/pages-otherservices';
import { PagesJobsPage } from './../pages/pages-jobs/pages-jobs';
import { PagesGalleryPage } from './../pages/pages-gallery/pages-gallery';
import { PagesContactusPage } from './../pages/pages-contactus/pages-contactus';
import { PagesClientPage } from './../pages/pages-client/pages-client';
import { PagesAboutusPage } from './../pages/pages-aboutus/pages-aboutus';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Platform } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { PagesJobseekerzoneloginPage } from '../pages/pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import { PagesJobseekerzoneregistrePage } from '../pages/pages-jobseekerzoneregistre/pages-jobseekerzoneregistre';
import { HTTP } from '@ionic-native/http/ngx';
import { PagesEmployerHomePage } from '../pages/pages-employer-home/pages-employer-home';
import { PagesEmployerJobListPage } from '../pages/pages-employer-job-list/pages-employer-job-list';
import { IonicStorageModule } from '@ionic/storage';
import { StorageserviceProvider } from '../providers/storageservice/storageservice';
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/file/ngx";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PagesAboutusPage,
    PagesClientPage,
    PagesContactusPage,
    PagesGalleryPage,
    PagesJobsPage,
    PagesOtherservicesPage,
    PagesJobseekerzoneloginPage,
    PagesJobseekerzoneregistrePage,
    PagesEmployerzoneloginPage,
    PagesEmployerzoneregisterPage,
    PagesSigninPage,
    PagesRegisterPage,
    PagesEmployerHomePage,
    PagesEmployerJobListPage,
    PagesEmployerProfilePage,
    PagesEmployerSeekerDescriptionPage,
    PagesPostjobPage,
    PagesGetcandidatesPage,
    PagesJobSeekerListPerjobPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PagesAboutusPage,
    PagesClientPage,
    PagesContactusPage,
    PagesGalleryPage,
    PagesJobsPage,
    PagesOtherservicesPage,
    PagesEmployerzoneloginPage,
    PagesEmployerzoneregisterPage,
    PagesJobseekerzoneloginPage,
    PagesJobseekerzoneregistrePage,
    PagesSigninPage,
    PagesRegisterPage,
    PagesEmployerHomePage,
    PagesEmployerJobListPage,
    PagesEmployerProfilePage,
    PagesEmployerSeekerDescriptionPage,
    PagesPostjobPage,
    PagesGetcandidatesPage,
    PagesJobSeekerListPerjobPage

  ],
  providers: [
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    
    StorageserviceProvider,
    SplashScreen,
    StatusBar,
    File,
    FilePath,
    FileChooser,
    FileTransfer,
    AndroidPermissions

    
  ]
})
export class AppModule {}
