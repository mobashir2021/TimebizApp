import { PagesEmployerSeekerDescriptionPage } from './../pages-employer-seeker-description/pages-employer-seeker-description';
import { PagesSubscriptionPage } from './../pages-subscription/pages-subscription';
import { PagesJobSeekerListPerjobPage } from './../pages-job-seeker-list-perjob/pages-job-seeker-list-perjob';
import { PagesPostjobPage } from './../pages-postjob/pages-postjob';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagesEmployerJobListPage } from '../pages-employer-job-list/pages-employer-job-list';

/**
 * Generated class for the PagesEmployerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-employer-home',
  templateUrl: 'pages-employer-home.html',
})
export class PagesEmployerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesEmployerHomePage');
  }

  PostJob(){
    this.navCtrl.push(PagesPostjobPage);
  
  }

  ViewPostedJobs(){
    this.navCtrl.push(PagesEmployerSeekerDescriptionPage);
  }

  ViewResumes(){
    this.navCtrl.push(PagesJobSeekerListPerjobPage);
  }

  ViewSubscription(){
    this.navCtrl.push(PagesSubscriptionPage);

  }

}
