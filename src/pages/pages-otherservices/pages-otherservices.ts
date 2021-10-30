import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagesOtherservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-otherservices',
  templateUrl: 'pages-otherservices.html',
})
export class PagesOtherservicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesOtherservicesPage');
  }

  otherServicesList = [
    {
      title : 'CANDIDATES FOR JOBS',
      Details: 'Recruitment refers to the overall process of attracting, shortlisting, selecting and appointing suitable candidates for jobs (either permanent or temporary) within an organization. Recruitment can also refer to processes involved in choosing individuals for unpaid roles. Managers, human resource generalists and recruitment specialists may be tasked with carrying out recruitment.',
      image: '../../assets/imgs/otherservices1.jpg'
      
    },
    {
      title : 'CANDIDATES FOR JOBS',
      Details: 'Recruitment refers to the overall process of attracting, shortlisting, selecting and appointing suitable candidates for jobs (either permanent or temporary) within an organization. Recruitment can also refer to processes involved in choosing individuals for unpaid roles. Managers, human resource generalists and recruitment specialists may be tasked with carrying out recruitment.',
      image: '../../assets/imgs/otherservices2.jpg'
    },
    {
      title : 'CANDIDATES FOR JOBS',
      Details: 'Recruitment refers to the overall process of attracting, shortlisting, selecting and appointing suitable candidates for jobs (either permanent or temporary) within an organization. Recruitment can also refer to processes involved in choosing individuals for unpaid roles. Managers, human resource generalists and recruitment specialists may be tasked with carrying out recruitment.',
      image: '../../assets/imgs/otherservices3.jpg'
    }
  ]

}
