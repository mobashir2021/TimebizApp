import { PagesGetcandidatesPage } from './../pages-getcandidates/pages-getcandidates';

import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, NavParams } from 'ionic-angular';
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';
import * as Constants from "../constants";
/**
 * Generated class for the PagesEmployerJobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pages-employer-job-list',
  templateUrl: 'pages-employer-job-list.html',
})
export class PagesEmployerJobListPage {

  apiUrlViewJobs: string = Constants.API_ENDPOINT + 'Jobclubapi/TimeBizListJobs';
  items: any;
  jobsList: any;
  companyid: number = 0;
  users: User[] = [];
  JobId: number = 0
  Userid: number = 0;
  Name: string = '';
  Designation: string = '';
  Qualification: string = '';
  Experience: string = '';
  Resumepath: string = '';
  AppliedDate: string = '';
  Skills: string = '';
  uploadtext: any;
  downloadtext: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HTTP, private storageservice: StorageserviceProvider) {
      this.jobsList = navParams.get("items");
        /* this.Userid = navParams.get("Userid");
        this.Name = navParams.get("Name");
        this.Designation = navParams.get("Designation");
        this.Qualification = navParams.get("Qualification");
        this.Experience = navParams.get("Experience");
        this.Resumepath = navParams.get("Resumepath");
        this.AppliedDate = navParams.get("AppliedDate");
        
        this.Skills = navParams.get("Skills"); */
        
    
    this.uploadtext = "";
    this.downloadtext = "";

      this.loadUsers();

  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
      if(users != null && users.length > 0){
        this.companyid = this.users[0].Companyid;

        /* this.http.get(this.apiUrlViewJobs, {'companyid': this.companyid}, {})
    .then(data => {
      
      var itemstest = JSON.stringify(data.data);
      alert(data.data);
      
      var testdata = JSON.parse(itemstest);
      alert(testdata);
      this.jobsList = JSON.parse(testdata);
      alert(this.jobsList);
      
      })
    .catch(error => {

      alert(JSON.stringify(error));

    }); */
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesEmployerJobListPage');

    
  }

  navigateCandidates(data: number){
    let filterResult : any = this.jobsList.filter(u => u.Userid == data);

    
    this.navCtrl.setRoot(PagesGetcandidatesPage, {
      Jobid: filterResult[0].Jobid,
      Userid: filterResult[0].Userid,
      Name: filterResult[0].Name,
      Designation: filterResult[0].Designation,
      Qualification: filterResult[0].Qualification,
      Skills: filterResult[0].Skills,
      Experience: filterResult[0].Experience,
      Resumepath: filterResult[0].Resumepath,
      AppliedDate: filterResult[0].AppliedDate
    });
  }

  






}
