import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesGetcandidatesPage } from './pages-getcandidates';

@NgModule({
  declarations: [
    PagesGetcandidatesPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesGetcandidatesPage),
  ],
})
export class PagesGetcandidatesPageModule {}
