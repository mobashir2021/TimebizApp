import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesClientPage } from './pages-client';

@NgModule({
  declarations: [
    PagesClientPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesClientPage),
  ],
})
export class PagesClientPageModule {}
