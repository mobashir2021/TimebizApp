import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesGalleryPage } from './pages-gallery';

@NgModule({
  declarations: [
    PagesGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesGalleryPage),
  ],
})
export class PagesGalleryPageModule {}
