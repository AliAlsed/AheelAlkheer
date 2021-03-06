import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {  HumancasePage } from '../pages/humancase/humancase';
import {  AddhumancasesPage } from '../pages/addhumancases/addhumancases';
import { ShowhumancasePage } from '../pages/showhumancase/showhumancase';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {  NeedingPage }  from  '../pages/needing/needing';
import {AddneedingPage }  from  '../pages/addneeding/addneeding';
import  {ShowneedingPage }  from  '../pages/showneeding/showneeding';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import {MapPage}  from  '../pages/map/map';
import {JsmapPage} from '../pages/jsmap/jsmap';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule} from 'angularfire2';
 import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { AngularFirestore  } from 'angularfire2/firestore';



 import { HttpModule } from '@angular/http';
import { FeedbackPage } from '../pages/feedback/feedback';
import { CallNumber } from '@ionic-native/call-number';



 
  

//  export const  firebaseConfig = {
//   apiKey: "AIzaSyDbVWK2phjQ1anZuyTWCAyDpWhDOheFWMQ",
//   authDomain: "ahlkhar-198020.firebaseapp.com",
//   databaseURL: "https://ahlkhar-198020.firebaseio.com",
//   projectId: "ahlkhar-198020",
//   storageBucket: "ahlkhar-198020.appspot.com",
//   messagingSenderId: "134697031230"
//   };


  export const  firebaseConfig = {
    apiKey: "AIzaSyDIdfS6i0zg9hYYlaUW6BkzLjP-T-kiHPE",
    authDomain: "userprofile-e99e2.firebaseapp.com",
    databaseURL: "https://userprofile-e99e2.firebaseio.com",
    projectId: "userprofile-e99e2",
    storageBucket: "userprofile-e99e2.appspot.com",
    messagingSenderId: "507887449144"
  };
  




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    ShowneedingPage,
    MapPage,
    AddhumancasesPage,
    HumancasePage,
    SignupPage,
    LoginPage,
    ShowhumancasePage,
    JsmapPage,
    FeedbackPage
   
  ],
  imports: [   
    
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'رجوع',
      backButtonIcon:'arrow-back'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule ,
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    ShowneedingPage,
    MapPage,
    AddhumancasesPage ,
    HumancasePage,
    ShowhumancasePage,
    JsmapPage ,
    SignupPage,
    LoginPage,
    FeedbackPage
   
   
  ],
  providers: [   
    CallNumber,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
