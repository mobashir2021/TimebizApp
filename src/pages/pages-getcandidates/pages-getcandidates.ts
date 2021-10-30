import { PagesEmployerHomePage } from './../pages-employer-home/pages-employer-home';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
//import { FileChooser } from "@ionic-native/file-chooser/ngx";
//import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/file/ngx";
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';
import { HTTP } from '@ionic-native/http/ngx';
//import { PagesJobseekerzoneloginPage } from '../pages-jobseekerzonelogin/pages-jobseekerzonelogin';
import * as Constants from "../constants";

/**
 * Generated class for the PagesGetcandidatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-getcandidates',
  templateUrl: 'pages-getcandidates.html',
})
export class PagesGetcandidatesPage {

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
  fileTranser: FileTransferObject;
  apiurlUpload : string = Constants.API_ENDPOINT + 'Jobclubapi/resumepath/';
  apiUrlapplyjobs: string = Constants.API_ENDPOINT + 'Jobclubapi/ViewCandidates';
  returnpath : string = '';
  filetype: string = '';
  filename: string = '';
  finalfilename : string = '';

  users: User[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer,
    private file: File,//, private fileChooser: FileChooser,
    private http: HTTP, private storageservice: StorageserviceProvider, private toastctl : ToastController) {

      
        this.JobId = navParams.get("JobId");
        this.Userid = navParams.get("Userid");
        this.Name = navParams.get("Name");
        this.Designation = navParams.get("Designation");
        this.Qualification = navParams.get("Qualification");
        this.Experience = navParams.get("Experience");
        this.Resumepath = navParams.get("Resumepath");
        this.AppliedDate = navParams.get("AppliedDate");
        
        this.Skills = navParams.get("Skills");
        
    
    this.uploadtext = "";
    this.downloadtext = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesGetcandidatesPage');
  }

  DownloadFile(){
    this.downloadtext = "Downloading file .......";
    this.fileTranser = this.transfer.create();
    this.filename   = this.Resumepath.substring(this.Resumepath.lastIndexOf("/") + 1);
    this.filetype   = this.filename.substring(this.filename.lastIndexOf(".") + 1);
    this.fileTranser.download(this.Resumepath, this.file.externalRootDirectory + this.filename).then((data) => {
      this.showToast("file downloaded");
      this.downloadtext = "";
      this.navCtrl.setRoot(PagesEmployerHomePage);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }

  async showToast(msg){
    const toast = await this.toastctl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  GoToHome(){
    this.navCtrl.setRoot(PagesEmployerHomePage);
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
    });
  }

}
