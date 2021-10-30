import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesEmployerHomePage } from './pages-employer-home';

@NgModule({
  declarations: [
    PagesEmployerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PagesEmployerHomePage),
  ],
})
export class PagesEmployerHomePageModule {}
