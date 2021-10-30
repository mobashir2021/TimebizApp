import { PagesJobSeekerListPerjobPage } from './../pages-job-seeker-list-perjob/pages-job-seeker-list-perjob';
import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagesJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-jobs',
  templateUrl: 'pages-jobs.html',
})
export class PagesJobsPage {

  jobsList: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jobsList = navParams.get('items');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesJobsPage');

    
  }

  navigateJobs(data: number){
    
    let filterResult : any = this.jobsList.filter(u => u.Jobid == data);
    

    
    this.navCtrl.push(PagesJobSeekerListPerjobPage, 
        {
          Jobid: filterResult[0].Jobid,
        JobTitle: filterResult[0].JobTitle,
        Description: filterResult[0].Description,
        Designation: filterResult[0].Designation,
        Companyid: filterResult[0].Companyid,
        Category: filterResult[0].Category,
        Companyname: filterResult[0].Companyname,
        District: filterResult[0].District,
        Skills: filterResult[0].Skills
        }
      );
  }

  
  /* jobsList = [
    {
      title : 'Developer',
      Details: 'Wanted 3 years experience .Net Developer with good communication Skill',
      Postedon: 'Posted On : December 30, 2019',
      Location: 'Kannur',
      Country: 'India'
    },
    {
      title : 'Relationship Manager',
      Details: 'Wanted 13 years experience Relationship Manager with great versitility',
      Postedon: 'Posted On : January 05, 2020',
      Location: 'Wayanada',
      Country: 'India'
    },
    {
      title : 'Graphic Designer',
      Details: 'Wanted 6 years experience UI Designer with Photoshop, Illustrator skills',
      Postedon: 'Posted On : February 10, 2019',
      Location: 'Calicut',
      Country: 'India'
    },
    {title : 'Project Manager',
      Details: 'Wanted senior Project Manager with atleast 3 Project handled',
      Postedon: 'Posted On : October 30, 2019',
      Location: 'Thiruvananthapuram',
      Country: 'India'
    }] */
  



}
