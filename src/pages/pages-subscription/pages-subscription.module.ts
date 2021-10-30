import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesSubscriptionPage } from './pages-subscription';

@NgModule({
  declarations: [
    PagesSubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesSubscriptionPage),
  ],
})
export class PagesSubscriptionPageModule {}
