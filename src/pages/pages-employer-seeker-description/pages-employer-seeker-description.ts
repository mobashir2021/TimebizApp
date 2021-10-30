import { PagesEmployerJobListPage } from './../pages-employer-job-list/pages-employer-job-list';
import { PagesGetcandidatesPage } from './../pages-getcandidates/pages-getcandidates';


import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, NavParams } from 'ionic-angular';
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';
import * as Constants from "../constants";

/**
 * Generated class for the PagesEmployerSeekerDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pages-employer-seeker-description',
  templateUrl: 'pages-employer-seeker-description.html',
})
export class PagesEmployerSeekerDescriptionPage {

  apiUrlViewJobs: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizListJobs';
  apiUrlgetCandidates: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizListJobsCandidates';
  items: any;
  jobsList: any;
  companyid: number = 0;
  users: User[] = [];
  valuesdata : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HTTP, private storageservice: StorageserviceProvider, private http1: HTTP) {
      this.loadUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesEmployerSeekerDescriptionPage');

  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
      if(users != null && users.length > 0){
        this.companyid = this.users[0].Companyid;

        this.http.get(this.apiUrlViewJobs, {'companyid': this.companyid}, {})
    .then(data => {
      
      var itemstest = JSON.stringify(data.data);
      
      var testdata = JSON.parse(itemstest);
      
      this.jobsList = JSON.parse(testdata);
      })
    .catch(error => {

      alert(JSON.stringify(error));

    });
      }
    });
  }

  navigateCandidates(data: number){
    this.http.get(this.apiUrlgetCandidates, {'jobid': data}, {})
    .then(data => {
      
      var itemstest = JSON.stringify(data.data);
     
      
      var testdata = JSON.parse(itemstest);
      
      this.valuesdata = JSON.parse(testdata);

      this.navCtrl.push(PagesEmployerJobListPage, {
        items: this.valuesdata
      });
      
      })
    .catch(error => {

      alert(JSON.stringify(error));

    });


    /* let filterResult : any = this.jobsList.filter(u => u.Userid == data);

    
    this.navCtrl.setRoot(PagesEmployerJobListPage, {
      Jobid: filterResult[0].Jobid,
      Userid: filterResult[0].Userid,
      Name: filterResult[0].Name,
      Designation: filterResult[0].Designation,
      Qualification: filterResult[0].Qualification,
      Skills: filterResult[0].Skills,
      Experience: filterResult[0].Experience,
      Resumepath: filterResult[0].Resumepath,
      AppliedDate: filterResult[0].AppliedDate
    }); */
  }

}
