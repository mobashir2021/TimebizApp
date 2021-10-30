import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSigninPage } from './pages-signin';

@NgModule({
  declarations: [
    PagesSigninPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesSigninPage),
  ],
})
export class PagesSigninPageModule {}
