import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesJobsPage } from './pages-jobs';

@NgModule({
  declarations: [
    PagesJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesJobsPage),
  ],
})
export class PagesJobsPageModule {}
