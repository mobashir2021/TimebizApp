import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesAboutusPage } from './pages-aboutus';

@NgModule({
  declarations: [
    PagesAboutusPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesAboutusPage),
  ],
})
export class PagesAboutusPageModule {}
