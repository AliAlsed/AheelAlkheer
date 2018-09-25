import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCasePage } from './add-case';

@NgModule({
  declarations: [
    AddCasePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCasePage),
  ],
})
export class AddCasePageModule {}
