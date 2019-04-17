import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmemoPage } from './smemo';

@NgModule({
  declarations: [
    SmemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SmemoPage),
  ],
})
export class SmemoPageModule {}
