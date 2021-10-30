import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesContactusPage } from './pages-contactus';

@NgModule({
  declarations: [
    PagesContactusPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesContactusPage),
  ],
})
export class PagesContactusPageModule {}
