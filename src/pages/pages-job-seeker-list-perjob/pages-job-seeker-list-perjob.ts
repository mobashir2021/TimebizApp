import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/file/ngx";
import { StorageserviceProvider, User } from '../../providers/storageservice/storageservice';
import { HTTP } from '@ionic-native/http/ngx';
import { PagesJobseekerzoneloginPage } from '../pages-jobseekerzonelogin/pages-jobseekerzonelogin';


/**
 * Generated class for the PagesJobSeekerListPerjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-job-seeker-list-perjob',
  templateUrl: 'pages-job-seeker-list-perjob.html',
})
export class PagesJobSeekerListPerjobPage {

  Jobid: number = 0
  JobTitle: string = '';
  Description: string = '';
  Designation: string = '';
  Companyid: string = '';
  Category: string = '';
  Companyname: string = '';
  District: string = '';
  Skills: string = '';
  uploadtext: any;
  downloadtext: any;
  fileTranser: FileTransferObject;
  apiurlUpload : string = 'http://www.fjfgroups.com/resumepath/';
  apiUrlapplyjobs: string = 'http://www.fjfgroups.com/api/LeadApi/TimeBizApplyjob';
  returnpath : string = '';
  filetype: string = '';
  filename: string = '';
  finalfilename : string = '';

  users: User[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer,
    private file: File, private filePath: FilePath, private fileChooser: FileChooser,
    private http: HTTP, private storageservice: StorageserviceProvider, private toastctl : ToastController) {
    
      this.Jobid = navParams.get("Jobid");
      this.JobTitle = navParams.get("JobTitle");
      this.Description = navParams.get("Description");
      this.Designation = navParams.get("Designation");
      this.Companyid = navParams.get("Companyid");
      this.Category = navParams.get("Category");
      this.Companyname =navParams.get("Companyname");
      this.District = navParams.get("District");
      
      this.Skills = navParams.get("Skills");
      
  
  this.uploadtext = "";
  this.downloadtext = "";
  this.loadUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesJobSeekerListPerjobPage');
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
    });
  }


  ApplyForJob(){

    if(this.users == null || this.users.length == 0){
      this.showToast('Kindly Login to Apply for Job');
      this.navCtrl.push(PagesJobseekerzoneloginPage);
    }else{

      this.http.get(this.apiUrlapplyjobs, {'Jobid': this.Jobid.toString(), 'Userid' : this.users[0].Userid.toString(),
      'filename' : this.finalfilename}, {})
    .then(data => {
      this.navCtrl.setRoot(HomePage);
      //var itemstest = JSON.stringify(data);
      alert('Job applied Successfully');
      this.navCtrl.setRoot(HomePage);
      })
    .catch(error => {

      this.showToast(JSON.stringify(error));

    });
    
    }
    
  }

  async showToast(msg){
    const toast = await this.toastctl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  GoToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  AbortUpload(){
    this.fileTranser.abort();
    alert("Upload Cancel");
  }

  UploadFile(){
    let arrayType = [ "pdf", "doc", "docx"];
    this.fileChooser.open().then((uri) => {
      this.filePath.resolveNativePath(uri).then((nativepath) => {
        this.returnpath = nativepath;


       /*  this.file.resolveLocalFilesystemUrl(this.returnpath).then((fileInfo) => {

          let files = fileInfo as FileEntry;
          files.file(success => {
            this.filetype = success.type;
            this.filename = success.name;
          })
        }, temperr => {
          alert(JSON.stringify(temperr));
        }) */
        var timestamp = new Date().getUTCMilliseconds().toString();
        this.filename   = nativepath.substring(nativepath.lastIndexOf("/") + 1);
        this.filetype   = this.filename.substring(this.filename.lastIndexOf(".") + 1);
        this.finalfilename = this.filename + timestamp + '.' + this.filetype;
        if(arrayType.indexOf(this.filetype) > -1)
        {
            this.fileTranser = this.transfer.create();
          let options: FileUploadOptions={
            fileKey: 'file',
            fileName: this.finalfilename,
            
            headers: {}
          }

          this.uploadtext = "Uploading ........";
          this.fileTranser.upload(nativepath, this.apiurlUpload, options).then((data) => {
            alert("File Uploaded");
            this.uploadtext = "";
            this.navCtrl.setRoot(HomePage);
          }, (err) => {
            this.uploadtext = "";
            alert(JSON.stringify(err));
          });
        }

        
      }, (errs) => {
        alert(JSON.stringify(errs));
      });
    }, (err) => {
        alert(JSON.stringify(err));
    });
  }

  DownloadFile(){
    this.downloadtext = "Downloading file .......";
    this.fileTranser = this.transfer.create();
    this.fileTranser.download("your file url", this.file.externalRootDirectory+"video.mp4").then((data) => {
      alert("file downloaded");
      this.downloadtext = "";
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

  AbortDownload(){
    this.fileTranser.abort();
    alert("download cancel");
  }



}
