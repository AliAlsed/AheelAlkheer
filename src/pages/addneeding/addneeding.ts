import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { NeedingPage } from '../needing/needing';
import { AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-addneeding',
  templateUrl: 'addneeding.html',
})
export class AddneedingPage {
  
  peoplelist: AngularFireList<any>;
  uid;


  firstname=""
  lastname="" 
  address=""
  phone=""
  infor=""



  constructor(private fire:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams,
     public af:AngularFireDatabase,private alertCtrl: AlertController , private toast:ToastController) {

    this.peoplelist=af.list('/waiting');
   
    this.fire.auth.onAuthStateChanged(function(user){
      // if(!user){
      //   this.navCtrl.push(LoginPage);
      // }else{
        
      // }
       console.log(user);
       });
       this.fire.authState.subscribe(auth =>{
        if (auth) {
          this.uid=auth.uid;
          console.log(auth);
        }
      })

      
  }
 
  createDevice(firstname,lastname, address,phone,infor){

    if( this.firstname.trim()  ===''  && this.lastname.trim() === '' && this.address.trim()   ===''  &&  this.phone.trim()   ===''  && this.infor.trim()   ==='' ){

      let alert1 = this.alertCtrl.create({
        title: 'رجاءا قم بمليء جميع الادخالات',
        
        buttons: ['OK']
      });
      alert1.present();



    }

    else{
    this.peoplelist.push({
      key_id: new Date().getTime(),
        firstname :this.firstname ,
          lastname :this.lastname,
          address:this.address,
          phone : this.phone,
          infor:this.infor,
          addBy:this.uid ,
          hide:0     
            
          }).then(newPerson => {
  
            this.navCtrl.push( NeedingPage);
          });
        }
   }

  


  goToMain(){
    this.navCtrl.setRoot(HomePage)
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneedingPage');
  }







}
