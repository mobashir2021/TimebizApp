import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { PagesEmployerHomePage } from '../pages-employer-home/pages-employer-home';
import { StorageserviceProvider, User } from "../../providers/storageservice/storageservice";
import { PagesEmployerzoneloginPage } from '../pages-employerzonelogin/pages-employerzonelogin';

/**
 * Generated class for the PagesPostjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-postjob',
  templateUrl: 'pages-postjob.html',
})
export class PagesPostjobPage {

  Category: string = '';
  JobTitle: string = '';
  Designation: string = '';
  Description: string = '';
  Salary: string = '';
  Vacancy: string = '';
  District: string = '';
  apiUrl: string = 'http://www.fjfgroups.com/api/LeadApi/TimebizJobPost';
  items: any;
  result : JSON;
  users: User[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HTTP, private storageservice: StorageserviceProvider, private toastctl : ToastController) {
      this.loadUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPostjobPage');
  }

  loadUsers(){
    this.storageservice.getItems().then(users => {
      this.users = users;
    });
  }

  async showToast(msg){
    const toast = await this.toastctl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  PostJob(){
    
    
    if(this.users != null && this.users.length > 0){
    this.http.get(this.apiUrl, {'Companyid': this.users[0].Companyid, 'Jobtitle': this.JobTitle, 'Category': this.Category,
      'Designation': this.Designation, 'Description': this.Description, 'Salary': this.Salary, 'Vacancies': this.Vacancy}, {})
  .then(data => {

    var itemstest = JSON.stringify(data);
    this.items = JSON.parse(itemstest);
    console.log(this.items);
    
    alert('Job Posted Successfully!');
      
      
      
      this.navCtrl.setRoot(PagesEmployerHomePage);

    
    

  })
  .catch(error => {

    alert(JSON.stringify(error));
  });

}else{
  this.navCtrl.push(PagesEmployerzoneloginPage);
}


  }


  backButton(){
    this.navCtrl.setRoot(PagesEmployerHomePage);
  }
}
