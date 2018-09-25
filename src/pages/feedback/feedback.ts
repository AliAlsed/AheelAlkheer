import { Component } from '@angular/core';
import {  NavController, NavParams, App } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  humancaselist: AngularFireList<any>;

  firstname;
  details;
 
   constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
 
     this.humancaselist=db.list('/feedback');
 
   }
 
   addcase(firstname,address,phone,details){
     this.humancaselist.push({
      key_id: new Date().getTime(),
         firstname :firstname ,
         details:details
           }).then(newPerson => {
             this.firstname="";
             this.details="";
           });
   }
 
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad AddhumancasesPage');
   }

}
