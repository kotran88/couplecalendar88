import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterTypePage } from './register-type';

@NgModule({
  declarations: [
    RegisterTypePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterTypePage),
  ],
})
export class RegisterTypePageModule {}
