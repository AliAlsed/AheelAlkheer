import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-addhumancases',
  templateUrl: 'addhumancases.html',
})
export class AddhumancasesPage {

 humancaselist: AngularFireList<any>;

 firstname;
 address;
 phone;
 details;

  constructor(public app:App,  private fire:AngularFireAuth,
    
    public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {

    this.humancaselist=db.list('/waitingcase');

  }

  addcase(firstname,address,phone,details){
    this.humancaselist.push({
     key_id: new Date().getTime(),
        firstname :firstname ,
        address: address,
        phone: phone,
        details:details
          }).then(newPerson => {
            this.firstname="";
            this.address="";
            this.phone="";
            this.details="";
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
      });
  }
  ionViewCanEnter(){

  }

}
