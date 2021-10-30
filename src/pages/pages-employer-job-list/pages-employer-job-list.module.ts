import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesEmployerJobListPage } from './pages-employer-job-list';

@NgModule({
  declarations: [
    PagesEmployerJobListPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesEmployerJobListPage),
  ],
})
export class PagesEmployerJobListPageModule {}
