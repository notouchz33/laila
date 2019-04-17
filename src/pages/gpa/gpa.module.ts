import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpaPage } from './gpa';

@NgModule({
  declarations: [
    GpaPage,
  ],
  imports: [
    IonicPageModule.forChild(GpaPage),
  ],
})
export class GpaPageModule {}
