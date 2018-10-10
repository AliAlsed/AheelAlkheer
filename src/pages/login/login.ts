import { TabsPage } from './../tabs/tabs';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, App } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import {AddneedingPage} from '../addneeding/addneeding';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';
import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email :string ;
  password : string ;
  peoplelist: AngularFireList<any>;
  uid;


  constructor( public af:AngularFireDatabase,
     public alertCtrl:AlertController ,
     public app:App,
     public toastCtrl:ToastController,public fire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  
      this.peoplelist=af.list('/device');


      this.fire.auth.onAuthStateChanged((user)=>{
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


    goToMain(){
      this.app.getRootNav().setRoot(TabsPage);
    }

    
  ionViewDidLoad() { 
    
   
   



    
    console.log(this.navParams.get('page')); }



  Login(){

    
if (this.email === undefined && this.password === undefined ) {
  console.log('email: '+this.email + '  password: '+this.password)
     return  this.showAlert();
}

    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 




    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(user =>{
      toast.present();
      if(this.navParams.get('page') == 2){
        console.log('AddneedingPage');
        this.navCtrl.push(AddneedingPage);
      } else{
        this.app.getRootNav().setRoot(TabsPage);
      }
    
     //this.navCtrl.push();
     
    }).catch(error=>{
      this.showAlert();
      
    })
      
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطا ',
      subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
      buttons: ['حسنا ']
    });
    alert.present();
  }
  signUP(){
    this.navCtrl.push(SignupPage,{
      'page':this.navParams.get('page')
    });
  }

    
  
}
