import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivateAgreePage } from './private-agree';

@NgModule({
  declarations: [
    PrivateAgreePage,
  ],
  imports: [
    IonicPageModule.forChild(PrivateAgreePage),
  ],
})
export class PrivateAgreePageModule {}
