import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesJobseekerProfilePage } from './pages-jobseeker-profile';

@NgModule({
  declarations: [
    PagesJobseekerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PagesJobseekerProfilePage),
  ],
})
export class PagesJobseekerProfilePageModule {}
