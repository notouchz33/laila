import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmoneyPage } from './smoney';

@NgModule({
  declarations: [
    SmoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(SmoneyPage),
  ],
})
export class SmoneyPageModule {}
