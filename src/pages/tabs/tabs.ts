import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { AddhumancasesPage } from '../addhumancases/addhumancases';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage
  feedbackRoot = FeedbackPage
  addCaseRoot = AddhumancasesPage


  constructor(public navCtrl: NavController) {}

}
