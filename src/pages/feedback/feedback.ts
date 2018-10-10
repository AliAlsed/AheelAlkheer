import { Component } from '@angular/core';
import {  NavController, NavParams, App } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
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
 
   constructor(public app:App,public navCtrl: NavController,
      public afAuth:AngularFireAuth,
     public navParams: NavParams,public db:AngularFireDatabase,
     private fire:AngularFireAuth) {
 
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
             console.log(this.afAuth.auth.currentUser.uid);
           });
   }
 
 
   ionViewDidLoad() {
    this.fire.auth.onAuthStateChanged((user)=>{
      if(!user){
        this.navCtrl.setRoot(LoginPage,{
          'page':1
        });
        console.log("Not found")
      }else{
       console.log(user);
       //this.navCtrl.push();
      }
      });   }

}
