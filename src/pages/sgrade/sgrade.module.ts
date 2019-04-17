import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SgradePage } from './sgrade';

@NgModule({
  declarations: [
    SgradePage,
  ],
  imports: [
    IonicPageModule.forChild(SgradePage),
  ],
})
export class SgradePageModule {}
