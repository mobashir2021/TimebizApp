import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesEmployerProfilePage } from './pages-employer-profile';

@NgModule({
  declarations: [
    PagesEmployerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PagesEmployerProfilePage),
  ],
})
export class PagesEmployerProfilePageModule {}
