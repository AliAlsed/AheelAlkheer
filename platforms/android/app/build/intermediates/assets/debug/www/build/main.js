webpackJsonp([11],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JsmapPage = (function () {
    function JsmapPage(alertCtrl, af, navCtrl, navParams, http) {
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        //added
        this.size$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null); //added
        this.items$ = this.size$.switchMap(function (size) {
            return af.list('/map', function (ref) {
                return size ? ref.orderByChild('size').equalTo(size) : ref;
            } //added
            ).snapshotChanges();
        } //added
        );
    }
    JsmapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    JsmapPage.prototype.loadMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(33.937663, 44.630127);
        var mapOptions = {
            center: latLng,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        this.items$.subscribe(function (actions) {
            actions.forEach(function (action) {
                // console.log(action.payload.val().latitude);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(action.payload.val().latitude, action.payload.val().longitude),
                    map: _this.map,
                });
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent("   ___" + action.payload.val().info + "  ");
                        infowindow.open(this.map, marker);
                    };
                })(marker, i));
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], JsmapPage.prototype, "mapElement", void 0);
    JsmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jsmap',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\jsmap\jsmap.html"*/`<!--\n\n  Generated template for the JsmapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar color="primary">\n\n      <ion-title>خريطة التبرع</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content >\n\n    <div id="map" #map style="height:100%"></div>\n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\jsmap\jsmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], JsmapPage);
    return JsmapPage;
}());

// var locationsObject = 
// {
//   "-KaVpzFh0FE9QmuMR8aa" : {
//     "latitude" : "33.759684",
//     "longitude" : "44.607975",
//     "info" : "Ahmed" 
//   },
//   "-KbVpzFh0FE9QmuMR8ba" : {
//     "latitude" : "33.843152",
//     "longitude" : "44.522209",
//     "info" : "Role of IT in Innovation" 
//   },
//   "-KcVpzFh0FE9QmuMR8ca" : {
//     "latitude" : "34.404077",
//     "longitude" : "45.386353",
//     "info" : "hello" 
//   },
//   "-KdfffFh0FE9QmuMR8ca" : {
//     "latitude" : "34.013396",
//     "longitude" : "44.869995",
//     "info" : "Muhamed" 
//   },
// }
//   Object.keys(locationsObject).forEach(key => {
//     // console.log(key);          // the name of the current key.
//     // console.log(locationsObject[key][ "latitude"]);   // the value of the current key.
//           marker = new google.maps.Marker({
//     position: new google.maps.LatLng(locationsObject[key][ "latitude"], locationsObject[key][ "longitude"]),
//     map:this.map,
//   });
//   google.maps.event.addListener(marker, 'click', (function(marker, i) {
//     return function() {
//       infowindow.setContent(locationsObject[key][ "info"]);
//       infowindow.open(this.map, marker);
//     }
//   })(marker, i));
// }); 
//# sourceMappingURL=jsmap.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumancasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showhumancase_showhumancase__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addhumancases_addhumancases__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HumancasePage = (function () {
    function HumancasePage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.itemsRef = db.list('/case');
        this.humancases = this.itemsRef.valueChanges();
        this.size$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.items$ = this.size$.switchMap(function (size) {
            return db.list('/case', function (ref) {
                return size ? ref.orderByChild('size').equalTo(size) : ref;
            }).snapshotChanges();
        });
        this.items$.subscribe(function (actions) {
            actions.forEach(function (action) {
                console.log(action.type);
                console.log(action.key);
                console.log(action.payload.val());
            });
        });
    }
    HumancasePage.prototype.itemSelected = function (key, firstname, lastname, address, phone, details) {
        // console.log(key, firstName, lastName, address,phone, details);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__showhumancase_showhumancase__["a" /* ShowhumancasePage */], {
            key: key,
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone: phone,
            details: details,
        });
    };
    HumancasePage.prototype.goToMain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    HumancasePage.prototype.goToaddcase = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__addhumancases_addhumancases__["a" /* AddhumancasesPage */]);
    };
    HumancasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HumancasePage');
    };
    HumancasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-humancase',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\humancase\humancase.html"*/`<style>\n\n\n\n  .list-ios > .item-block:first-child {\n\n    border-top: 0.55px solid #ffffff;\n\n}\n\n\n\n</style>\n\n\n\n\n\n\n\n<ion-header no-border  >\n\n    <ion-navbar color="showHumanColor" no-border >\n\n    </ion-navbar >\n\n  </ion-header>\n\n       <ion-content >\n\n          <img src="assets/imgs/asmaaa.png"   /> \n\n \n\n  \n\n       <ion-list > \n\n  \n\n      <button class="caselist" ion-item  *ngFor=" let item  of items$  | async json " (click)="itemSelected(item.payload.val().key,item.payload.val().firstname,item.payload.val().lastname,item.payload.val().address,item.payload.val().phone,item.payload.val().details)"> \n\n          \n\n        <ion-avatar item-start>\n\n          <img class="img1" src="assets/imgs/person3.png">\n\n        </ion-avatar>\n\n     \n\n        <p>{{item.payload.val().firstname}} </p>\n\n       \n\n         \n\n        <button ion-button clear item-end> التفاصيل</button>\n\n  \n\n    </button>\n\n  \n\n  </ion-list>\n\n\n\n  \n\n  </ion-content>\n\n  `/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\humancase\humancase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HumancasePage);
    return HumancasePage;
}());

//# sourceMappingURL=humancase.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowhumancasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowhumancasePage = (function () {
    function ShowhumancasePage(navCtrl, navParams, callp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callp = callp;
        this.myInfo = {
            key: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            details: ''
        };
        this.myInfo.key = this.navParams.get('key');
        this.myInfo.firstname = this.navParams.get('firstname');
        this.myInfo.lastname = this.navParams.get('lastname');
        this.myInfo.address = this.navParams.get('address');
        this.myInfo.phone = this.navParams.get('phone');
        this.myInfo.details = this.navParams.get('details');
    }
    ShowhumancasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowhumancasePage');
    };
    ShowhumancasePage.prototype.call = function (phone) {
        this.callp.callNumber(String(phone), true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ShowhumancasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showhumancase',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\showhumancase\showhumancase.html"*/`<style>\n\n\n\n    .imgSize3{\n\n      width: 40%;\n\n  }\n\n \n\n .card-header-ios1 {\n\n padding: 2px;\n\n }\n\n \n\n </style>\n\n\n\n\n\n\n\n\n\n<ion-header no-border  >\n\n  <ion-navbar color="showHumanColor" no-border >\n\n\n\n  </ion-navbar >\n\n \n\n</ion-header>\n\n \n\n<ion-content  >\n\n  <img src="assets/imgs/halat.png"   /> \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <div padding>\n\n      <ion-card>\n\n          <ion-card-header>\n\n              <p> المتبرع : {{myInfo.firstname}}   </p>\n\n          </ion-card-header>         \n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-header class="item-text-wrap" text-wrap>\n\n                <p >  {{myInfo.details}}   </p>\n\n            </ion-card-header>         \n\n          </ion-card>\n\n          <ion-card>\n\n              <ion-card-header class="card-header-ios1">\n\n  <ion-grid  >\n\n      <ion-row>\n\n        <ion-col col-6 >                   \n\n            <img class="imgSize3"  src="assets/imgs/item/compass-pup.png"   />           \n\n        </ion-col>\n\n        <ion-col col-6  class="imgSize3" text-wrap >      \n\n            <p>  {{myInfo.address}}   </p>\n\n      </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n              </ion-card-header>         \n\n            </ion-card>\n\n\n\n            <ion-card>\n\n                <ion-card-header  class="card-header-ios1">\n\n    <ion-grid  >\n\n    <ion-row>\n\n      <ion-col col-6 >                   \n\n          <img (click)="call(myInfo.phone)"class="imgSize3"    src="assets/imgs/item/phone-pup.png"   />           \n\n      </ion-col>\n\n      <ion-col col-6  class="imgSize3">      \n\n          <p>  {{myInfo.phone}}   </p>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n                </ion-card-header>         \n\n              </ion-card>\n\n            </div>\n\n\n\n\n\n \n\n\n\n \n\n\n\n  </ion-content>\n\n  \n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\showhumancase\showhumancase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ShowhumancasePage);
    return ShowhumancasePage;
}());

//# sourceMappingURL=showhumancase.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addneeding_addneeding__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(alertCtrl, toastCtrl, navCtrl, navParams, fire) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.email = '';
        this.password = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () { console.log('ionViewDidLoad SignupPage'); };
    SignupPage.prototype.gotoLogin = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]); };
    SignupPage.prototype.Signup = function () {
        var _this = this;
        var email_already_in_use = this.toastCtrl.create({
            message: 'هذا المستخدم موجود مسبقاً ..!',
            duration: 3000,
            position: 'top'
        });
        var weak_password = this.toastCtrl.create({
            message: 'كلمة المرور ضعيفة ..!',
            duration: 3000,
            position: 'top'
        });
        var invalid_email = this.toastCtrl.create({
            message: 'تأكد من البريد الالكتروني بشكل صحيح ..!',
            duration: 3000,
            position: 'top'
        });
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__addneeding_addneeding__["a" /* AddneedingPage */]);
        }).catch(function (error) {
            console.log(error);
            console.log(error.code);
            if (error.code == "auth/email-already-in-use") {
                email_already_in_use.present();
            }
            if (error.code == "auth/weak-password") {
                weak_password.present();
            }
            if (error.code == "auth/invalid-email") {
                invalid_email.present();
            }
        });
        console.log(this.email + " " + this.password);
    };
    SignupPage.prototype.emailAlreadyInUse = function () {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: "المستخدم موجود",
            buttons: ['حسناً']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\signup\signup.html"*/`\n\n<ion-header> \n\n  \n\n  <ion-navbar color="primary" >\n\n\n\n     <ion-title> انشاء حساب</ion-title> \n\n\n\n    </ion-navbar>\n\n    \n\n   </ion-header>\n\n\n\n\n\n  <ion-content padding>\n\n\n\n  <!-- <ion-list> -->\n\n\n\n      <!-- <p text-center> قم بانشاء حسابك</p>     -->\n\n   \n\n\n\n    <ion-item>\n\n      <ion-label floating> <ion-icon ios="ios-person" md="md-person" color="danger"> البريدالالكتروني</ion-icon> </ion-label>\n\n\n\n         <ion-input type="text" [(ngModel)]="email" ></ion-input>\n\n    </ion-item>\n\n                 \n\n    <ion-item>\n\n         <ion-label floating>  <ion-icon ios="ios-lock" md="md-lock" color="danger"> كلمة المرور </ion-icon></ion-label>\n\n         <ion-input type="password"  [(ngModel)]="password"></ion-input>\n\n    </ion-item>\n\n\n\n      \n\n    <div padding>\n\n    <!-- <ion-item>                   -->\n\n      <button ion-button  block large  icon-right  color="primary"  (click)="Signup()"  >\n\n        <div style="margin: 8px">اضافة حساب</div>       \n\n      </button>        \n\n    <!-- </ion-item>  -->\n\n    \n\n  </div>\n\n\n\n   <!-- </ion-list> -->\n\n  \n\n\n\n \n\n</ion-content>\n\n\n\n \n\n \n\n\n\n   \n\n   `/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowneedingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowneedingPage = (function () {
    function ShowneedingPage(callp, fire, navCtrl, navParams) {
        this.callp = callp;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myInfo = {
            key: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            infor: ''
        };
        this.myInfo.key = this.navParams.get('key');
        this.myInfo.firstname = this.navParams.get('firstname');
        this.myInfo.lastname = this.navParams.get('lastname');
        this.myInfo.address = this.navParams.get('address');
        this.myInfo.phone = this.navParams.get('phone');
        this.myInfo.infor = this.navParams.get('infor');
    }
    ShowneedingPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ShowneedingPage');
    };
    ShowneedingPage.prototype.call = function (phone) {
        this.callp.callNumber(String(phone), true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ShowneedingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showneeding',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\showneeding\showneeding.html"*/`<style>\n\n\n\n   .imgSize3{\n\n     width: 40%;\n\n }\n\n\n\n.card-header-ios1 {\n\npadding: 2px;\n\n}\n\n\n\n</style>\n\n\n\n\n\n\n\n<ion-header no-border  >\n\n    <ion-navbar color="tafasil" no-border >\n\n  \n\n    </ion-navbar >\n\n   \n\n  </ion-header>\n\n\n\n\n\n<ion-content >\n\n    <img src="assets/imgs/Group2765.png"   /> \n\n\n\n    <div padding>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <p> المتبرع : {{myInfo.lastname}}   </p>\n\n            </ion-card-header>         \n\n          </ion-card>\n\n          <ion-card>\n\n              <ion-card-header text-wrap>\n\n                  <p>  {{myInfo.infor}}   </p>\n\n              </ion-card-header>         \n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-card-header class="card-header-ios1">\n\n    <ion-grid  >\n\n        <ion-row>\n\n          <ion-col col-6 >                   \n\n              <img class="imgSize3"    src="assets/imgs/item/compass-green.png"   />           \n\n          </ion-col>\n\n          <ion-col col-6  class="imgSize3">      \n\n              <p>  {{myInfo.address}}   </p>\n\n        </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n                </ion-card-header>         \n\n              </ion-card>\n\n \n\n              <ion-card>\n\n                  <ion-card-header  class="card-header-ios1">\n\n      <ion-grid  >\n\n      <ion-row>\n\n        <ion-col col-6 >                   \n\n            <img (click)="call(myInfo.phone)"class="imgSize3"    src="assets/imgs/item/phone-green.png"   />           \n\n        </ion-col>\n\n        <ion-col col-6  class="imgSize3">      \n\n            <p>  {{myInfo.phone}}   </p>\n\n      </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n                  </ion-card-header>         \n\n                </ion-card>\n\n              </div>\n\n   \n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\showneeding\showneeding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ShowneedingPage);
    return ShowneedingPage;
}());

//# sourceMappingURL=showneeding.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-case/add-case.module": [
		518,
		0
	],
	"../pages/addhumancases/addhumancases.module": [
		519,
		10
	],
	"../pages/addneeding/addneeding.module": [
		520,
		9
	],
	"../pages/humancase/humancase.module": [
		521,
		8
	],
	"../pages/jsmap/jsmap.module": [
		522,
		7
	],
	"../pages/login/login.module": [
		523,
		6
	],
	"../pages/map/map.module": [
		524,
		5
	],
	"../pages/needing/needing.module": [
		525,
		4
	],
	"../pages/showhumancase/showhumancase.module": [
		526,
		3
	],
	"../pages/showneeding/showneeding.module": [
		527,
		2
	],
	"../pages/signup/signup.module": [
		528,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.goToMain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\about\about.html"*/`<ion-header no-border  >\n\n    <ion-navbar color="tafasila" no-border >\n\n  \n\n    </ion-navbar >\n\n   \n\n  </ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n    <img src="assets/imgs/Group2sa.png"   /> \n\n\n\n\n\n<div padding>\n\n  <ion-card color="white">\n\n      <ion-card-header>\n\n         <h2> <span style="color:#f53d3d ;font-weight:bold">أهل الخير</span></h2>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <p>مشروعنا مبادرة انسانيه غير حكومية ولا تسعى للربح , فكرتها تأمين الخدمات والمساعدات للمحتاجين من الشباب والاطفال الايتام , والمسنين, والمعوقين وذوي الاحتياجات الخاصة في العراق .تهدف في الاساس الى عدد من الانشطة العامة او الخاصة بدون اي مصلحة تجارية اوهدف ربحي او الدعوة اليه او الانخراط فيه. نحاول عن طريق البرمجة ان نشارك في مجالات واسعه كالمساعدات الانسانية والبيئه وحماية الحقوق والتعليم والفنون والرعاية الصحية والقضايا الاجتماعية والمؤسسات الخيرية والسياسة والدين والبحوث والرياضة وغيرها من المساعي.</p>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <ion-card  color="white">\n\n      <ion-card-header>\n\n         <h2> <span style="color:#f53d3d ;font-weight:bold">أعضاء الفريق </span></h2>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n          <ion-list>\n\n              <ion-item>\n\n                <ion-thumbnail item-start>\n\n                  <img src="assets/imgs/mhmd.jpg">\n\n                </ion-thumbnail>\n\n                <h3>محمد عيسى </h3>\n\n                <ion-row>\n\n                <ion-note>\n\n                  صاحب المبادرة\n\n                </ion-note>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-note>\n\n                  مبرمج ومطور\n\n                </ion-note>\n\n\n\n              </ion-row>\n\n              </ion-item>\n\n            \n\n\n\n              <ion-item>\n\n                  <ion-thumbnail item-start>\n\n                      <img src="assets/imgs/omar.jpg">\n\n                  </ion-thumbnail>\n\n                  <h3> عمر خليفة </h3>\n\n                  <ion-note>\n\n                     شارك في البرمجة\n\n                  </ion-note>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="assets/imgs/girl.jpeg">\n\n                    </ion-thumbnail>\n\n                    <h3> ميادة ناجي  </h3>\n\n                    <ion-row>\n\n                    <ion-note>\n\n                    شاركت في البرمجة\n\n                    </ion-note>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-note>\n\n                      والخوارزمية\n\n                     </ion-note>\n\n                    </ion-row>\n\n                  </ion-item>\n\n\n\n                  <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/girl.jpeg">\n\n                      </ion-thumbnail>\n\n                      <h3> أفنان صالح </h3>\n\n                      <ion-row>\n\n                      <ion-note>\n\n                        شاركت في البرمجة\n\n                      </ion-note>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                      <ion-note>\n\n                        وتصميم التطبيق\n\n                      </ion-note>\n\n                    </ion-row>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-thumbnail item-start>\n\n                            <img src="assets/imgs/muhanad.jpeg">\n\n                        </ion-thumbnail>\n\n                        <h3> مهند عصام </h3>\n\n                        <ion-note>\n\n                          شارك في البرمجة\n\n                        </ion-note>\n\n                      </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/girl.jpeg">\n\n                      </ion-thumbnail>\n\n                      <h3> شيماء سعدون</h3>\n\n                      <ion-note>\n\n                              صاحبة الفكرة\n\n                      </ion-note>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/haider.jpg">\n\n                      </ion-thumbnail>\n\n                      <h3> حيدر خالد </h3>\n\n                      <ion-note>\n\n                        شارك في الخوارزمية\n\n                      </ion-note>\n\n                      \n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/ali.jpg">\n\n                      </ion-thumbnail>\n\n                      <h3> علي جاسم محمد </h3>\n\n                      <ion-note>\n\n                        شارك في البرمجه وتطوير\n\n                      </ion-note>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/mostafa.jpg">\n\n                      </ion-thumbnail>\n\n                      <h3> مصطفى محمود </h3>\n\n                      <ion-note>\n\n                        شارك في الخوارزمية\n\n                      </ion-note>\n\n                    </ion-item>\n\n\n\n                    \n\n\n\n\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/girl.jpeg">\n\n                      </ion-thumbnail>\n\n                      <h3>   الاء حامد</h3>\n\n                      <ion-note>\n\n                              بيانات\n\n                      </ion-note>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/girl.jpeg">\n\n                      </ion-thumbnail>\n\n                      <h3>    انتصار برجس طلال العبادي</h3>\n\n                      <ion-note>\n\n                              بيانات\n\n                      </ion-note>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                      <ion-thumbnail item-start>\n\n                          <img src="assets/imgs/girl.jpeg">\n\n                      </ion-thumbnail>\n\n                      <h3>   نرجس تحسين عباس</h3>\n\n                      <ion-note>\n\n                              بيانات\n\n                      </ion-note>\n\n                    </ion-item>\n\n                   \n\n\n\n            </ion-list>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card color="white">\n\n        <ion-card-header>\n\n           <h2> <span style="color:#f53d3d ;font-weight:bold"> راسلنا  </span></h2>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          \n\n         <ion-row>\n\n            <ion-col>\n\n              <h4 text-center> لغرض الأبلاغ عن حالة انسانية يرجى مراسلتنا على العنوان التالي</h4>\n\n              <br>\n\n             <a href="#"><h2>ahel-alkher@codeforiraq.org</h2></a>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n  \n\n      <ion-card color="white">\n\n        <ion-card-content>\n\n          \n\n          \n\n        <ion-row>\n\n          <ion-col>\n\n             \n\n           \n\n            <img src="assets/imgs/codeforiraqlogo.jpg" style="width:100%"/>\n\n  \n\n          </ion-col>\n\n        </ion-row>\n\n       \n\n  <br><br><br>\n\n    \n\n  <ion-row>\n\n    <ion-col>\n\n      <h2 text-center> يمكنك زيارة موقع التطبيق عبر الرابط</h2>\n\n     <a href="#"><h2>www.ahel-alkeer.codeforiraq.org</h2></a>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n      <ion-col><h3 text-center>v1.0</h3></ion-col>\n\n      \n\n  </ion-row>\n\n  \n\n  </ion-card-content>\n\n  </ion-card>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addhumancases_addhumancases__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */];
        this.feedbackRoot = __WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */];
        this.addCaseRoot = __WEBPACK_IMPORTED_MODULE_4__addhumancases_addhumancases__["a" /* AddhumancasesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\tabs\tabs.html"*/`<ion-tabs>\n    <ion-tab [root]="homeRoot" tabTitle="الصفحه الرئيسه" tabIcon="home"></ion-tab>\n    <ion-tab [root]="feedbackRoot" tabTitle="راسلنا" tabIcon="paper-plane"></ion-tab>\n    <ion-tab [root]="addCaseRoot" tabTitle="حالة إنسانية" tabIcon="create"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(app, navCtrl, navParams, db) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.humancaselist = db.list('/feedback');
    }
    FeedbackPage.prototype.addcase = function (firstname, address, phone, details) {
        var _this = this;
        this.humancaselist.push({
            key_id: new Date().getTime(),
            firstname: firstname,
            details: details
        }).then(function (newPerson) {
            _this.firstname = "";
            _this.details = "";
        });
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddhumancasesPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\feedback\feedback.html"*/`<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header no-border>\n  <ion-navbar color="primary"   >\n       <ion-title >\n        راسلنا\n       </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines  > \n   \n    <ion-item >\n      <ion-label floating >الاسم</ion-label>\n      <ion-input \n            type="text" \n            [(ngModel)]= "firstname" ></ion-input>\n    </ion-item>\n\n   <ion-item>\n     <ion-label floating>اضافه ملاحضه</ion-label>\n     <ion-textarea \n              rows="4"\n              type="text" \n              [(ngModel)]= "details" ></ion-textarea>\n   </ion-item>\n   \n\n   \n<ion-item>\n\n<button ion-button  block large  icon-right color="primary" (click)="addcase(firstname,address,phone,details)" >\n  \n  <ion-icon name=paper-plane large ></ion-icon> &nbsp;&nbsp;\n    إضافة ملاحضه\n \n</button>\n</ion-item>\n\n</ion-list> \n</ion-content>\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapPage = (function () {
    function MapPage() {
    }
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\map\map.html"*/`\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title> \n\n      خارطة التبرع\n\n    </ion-title>      \n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\map\map.html"*/,
        })
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_humancase_humancase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addhumancases_addhumancases__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_showhumancase_showhumancase__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_needing_needing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addneeding_addneeding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_showneeding_showneeding__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_map_map__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jsmap_jsmap__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_feedback_feedback__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//pages






















//  export const  firebaseConfig = {
//   apiKey: "AIzaSyDbVWK2phjQ1anZuyTWCAyDpWhDOheFWMQ",
//   authDomain: "ahlkhar-198020.firebaseapp.com",
//   databaseURL: "https://ahlkhar-198020.firebaseio.com",
//   projectId: "ahlkhar-198020",
//   storageBucket: "ahlkhar-198020.appspot.com",
//   messagingSenderId: "134697031230"
//   };
var firebaseConfig = {
    apiKey: "AIzaSyDIdfS6i0zg9hYYlaUW6BkzLjP-T-kiHPE",
    authDomain: "userprofile-e99e2.firebaseapp.com",
    databaseURL: "https://userprofile-e99e2.firebaseio.com",
    projectId: "userprofile-e99e2",
    storageBucket: "userprofile-e99e2.appspot.com",
    messagingSenderId: "507887449144"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_needing_needing__["a" /* NeedingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addneeding_addneeding__["a" /* AddneedingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_showneeding_showneeding__["a" /* ShowneedingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addhumancases_addhumancases__["a" /* AddhumancasesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_humancase_humancase__["a" /* HumancasePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_showhumancase_showhumancase__["a" /* ShowhumancasePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jsmap_jsmap__["a" /* JsmapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: 'رجوع',
                    backButtonIcon: 'arrow-back'
                }, {
                    links: [
                        { loadChildren: '../pages/add-case/add-case.module#AddCasePageModule', name: 'AddCasePage', segment: 'add-case', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addhumancases/addhumancases.module#AddhumancasesPageModule', name: 'AddhumancasesPage', segment: 'addhumancases', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addneeding/addneeding.module#AddneedingPageModule', name: 'AddneedingPage', segment: 'addneeding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/humancase/humancase.module#HumancasePageModule', name: 'HumancasePage', segment: 'humancase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jsmap/jsmap.module#JsmapPageModule', name: 'JsmapPage', segment: 'jsmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/needing/needing.module#NeedingPageModule', name: 'NeedingPage', segment: 'needing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showhumancase/showhumancase.module#ShowhumancasePageModule', name: 'ShowhumancasePage', segment: 'showhumancase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/showneeding/showneeding.module#ShowneedingPageModule', name: 'ShowneedingPage', segment: 'showneeding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_needing_needing__["a" /* NeedingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_addneeding_addneeding__["a" /* AddneedingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_showneeding_showneeding__["a" /* ShowneedingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_addhumancases_addhumancases__["a" /* AddhumancasesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_humancase_humancase__["a" /* HumancasePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_showhumancase_showhumancase__["a" /* ShowhumancasePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jsmap_jsmap__["a" /* JsmapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__needing_needing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsmap_jsmap__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__humancase_humancase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__jsmap_jsmap__["a" /* JsmapPage */]);
    };
    HomePage.prototype.goToHumancase = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__humancase_humancase__["a" /* HumancasePage */]);
    };
    HomePage.prototype.goToNeeding = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__needing_needing__["a" /* NeedingPage */]);
    };
    HomePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\home\home.html"*/`<style>\n  .ion-content {\nbackground: url("assets/imgs/item/mbg.png") no-repeat fixed center; \n -webkit-background-size: cover;\n -moz-background-size: cover;\n background-size: cover;\n background-color: white;\n \n}\n.imgSize{\n padding: 3%;\n}\n.imgSize2{\n padding-left: 6%;\n}\n.imgSize3{\n padding-right: 6%;\n}\n</style>\n\n\n<ion-content   >\n<img src="assets/imgs/pic9.png" style="width:100%"/>\n\n<div  class="imgSize"  >\n\n\n    <ion-grid  class="  mypaddingHome">\n            <ion-row>\n              <ion-col col-6 class="imgSize2">\n                  \n                      <img (click)="goToMap()"   src="assets/imgs/item/mapp.png"   /> \n                \n              </ion-col>\n              <ion-col col-6 class="imgSize3">\n              \n                  <img   (click)="goToHumancase()" src="assets/imgs/item/instaniya.png"   /> \n             \n              </ion-col>\n\n            </ion-row>\n          </ion-grid>\n      \n   \n        \n          <ion-grid  class="  mypaddingHome" >\n                <ion-row>\n                \n                  <ion-col col-6 class="imgSize2">\n                          \n                      <img  (click)="goToNeeding()"   src="assets/imgs/item/hajaa.png"   /> \n                      \n                  </ion-col>\n                  <ion-col col-6  class="imgSize3">\n                       \n                    <img  (click)=" goToAbout()"   src="assets/imgs/item/aboutta.png"   /> \n                    \n                </ion-col>\n                </ion-row>\n              </ion-grid>\n      \n   \n\n        \n            </div>\n                 \n\n\n</ion-content>`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\contact\contact.html"*/`<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      تفاصيل اكثر\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddhumancasesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddhumancasesPage = (function () {
    function AddhumancasesPage(app, navCtrl, navParams, db) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.humancaselist = db.list('/waitingcase');
    }
    AddhumancasesPage.prototype.addcase = function (firstname, address, phone, details) {
        var _this = this;
        this.humancaselist.push({
            key_id: new Date().getTime(),
            firstname: firstname,
            address: address,
            phone: phone,
            details: details
        }).then(function (newPerson) {
            _this.firstname = "";
            _this.address = "";
            _this.phone = "";
            _this.details = "";
        });
    };
    AddhumancasesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddhumancasesPage');
    };
    AddhumancasesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addhumancases',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\addhumancases\addhumancases.html"*/`\n\n<ion-header no-border>\n\n    <ion-navbar color="primary"   >\n\n         <ion-title >\n\n           إضافة حالة إنسانية\n\n         </ion-title>\n\n    </ion-navbar>\n\n </ion-header>\n\n    \n\n \n\n <ion-content  padding>\n\n\n\n     <ion-list no-lines  > \n\n   \n\n             <ion-item >\n\n               <ion-label floating >الاسم</ion-label>\n\n               <ion-input \n\n                     type="text" \n\n                     [(ngModel)]= "firstname" ></ion-input>\n\n             </ion-item>\n\n         \n\n             <ion-item>\n\n                <ion-label floating>العنوان</ion-label>\n\n                <ion-input \n\n                        type="text"  \n\n                        [(ngModel)]= "address"></ion-input>\n\n             </ion-item>\n\n \n\n             <ion-item>\n\n               <ion-label floating>رقم الهاتف</ion-label>\n\n               <ion-input \n\n                           type="text"  \n\n                           [(ngModel)]= "phone"></ion-input>\n\n             </ion-item>\n\n       \n\n         \n\n\n\n \n\n            <ion-item>\n\n              <ion-label floating>معلومات المنظمه الخيريه</ion-label>\n\n              <ion-textarea \n\n                       rows="4"\n\n                       type="text" \n\n                       [(ngModel)]= "details" ></ion-textarea>\n\n            </ion-item>\n\n            \n\n\n\n            \n\n       <ion-item>\n\n\n\n       <button ion-button  block large  icon-right color="primary" (click)="addcase(firstname,address,phone,details)" >\n\n           \n\n           <ion-icon name=ios-add-circle large ></ion-icon> &nbsp;&nbsp;\n\n             إضافة حاله\n\n          \n\n         </button>\n\n       </ion-item>\n\n        \n\n     </ion-list> \n\n </ion-content>\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\addhumancases\addhumancases.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddhumancasesPage);
    return AddhumancasesPage;
}());

//# sourceMappingURL=addhumancases.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddneedingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__needing_needing__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddneedingPage = (function () {
    function AddneedingPage(fire, navCtrl, navParams, af, alertCtrl, toast) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.firstname = "";
        this.lastname = "";
        this.address = "";
        this.phone = "";
        this.infor = "";
        this.peoplelist = af.list('/waiting');
        this.fire.auth.onAuthStateChanged(function (user) {
            // if(!user){
            //   this.navCtrl.push(LoginPage);
            // }else{
            // }
            console.log(user);
        });
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.uid = auth.uid;
                console.log(auth);
            }
        });
    }
    AddneedingPage.prototype.createDevice = function (firstname, lastname, address, phone, infor) {
        var _this = this;
        if (this.firstname.trim() === '' && this.lastname.trim() === '' && this.address.trim() === '' && this.phone.trim() === '' && this.infor.trim() === '') {
            var alert1 = this.alertCtrl.create({
                title: 'رجاءا قم بمليء جميع الادخالات',
                buttons: ['OK']
            });
            alert1.present();
        }
        else {
            this.peoplelist.push({
                key_id: new Date().getTime(),
                firstname: this.firstname,
                lastname: this.lastname,
                address: this.address,
                phone: this.phone,
                infor: this.infor,
                addBy: this.uid,
                hide: 0
            }).then(function (newPerson) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__needing_needing__["a" /* NeedingPage */]);
            });
        }
    };
    AddneedingPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AddneedingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddneedingPage');
    };
    AddneedingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addneeding',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\addneeding\addneeding.html"*/`\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons end>\n\n      <button  ion-button color="light"  (click)="goToMain()">\n\n          <ion-icon name=\'ios-home\' is-active="false"></ion-icon>&nbsp;\n\n          \n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title> اضافة حاجة</ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n    <ion-list  no-lines>   \n\n            \n\n    \n\n \n\n      <ion-item   >               \n\n        <ion-label  floating > اسم الحاجة: </ion-label>           \n\n         <ion-input  [(ngModel)]= "firstname"  class="ion-input-custom"></ion-input> \n\n          </ion-item>        \n\n             \n\n             \n\n            <ion-item >          \n\n               <ion-label  floating>  اسم المتبرع:</ion-label>\n\n               <ion-input     type="text"  [(ngModel)]= "lastname"  class="ion-input-custom" ></ion-input>              \n\n             </ion-item>\n\n \n\n             <ion-item>\n\n                 <ion-label   floating> عنوان السكن  :</ion-label>\n\n                 <ion-input  type="text"  [(ngModel)]= "address"  class="ion-input-custom"   ></ion-input>\n\n               </ion-item>      \n\n           \n\n               \n\n             <ion-item >\n\n               <ion-label   floating > رقم الهاتف : </ion-label>\n\n               <ion-input  type="number" [(ngModel)]= "phone"class="ion-input-custom" ></ion-input>\n\n             </ion-item>\n\n              \n\n             <ion-item >\n\n               <ion-label   floating>اكتب عن الحاجة : </ion-label>\n\n               <ion-textarea   type="text"  rows="4" [(ngModel)]= "infor" class="ion-input-custom" > </ion-textarea> \n\n               </ion-item >\n\n \n\n          <ion-item>\n\n       \n\n     <!-- <ion-item> -->\n\n      <button ion-button block large  icon-right (click)="createDevice(firstname,lastname,address,phone,\n\n      infor)">\n\n        <div style="margin: 8px">اضافة</div>\n\n         \n\n      </button>\n\n      <!-- </ion-item> -->\n\n\n\n\n\n          </ion-item>    \n\n        \n\n   \n\n    \n\n   </ion-list >\n\n \n\n\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\addneeding\addneeding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], AddneedingPage);
    return AddneedingPage;
}());

//# sourceMappingURL=addneeding.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showneeding_showneeding__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NeedingPage = (function () {
    function NeedingPage(alertCtrl, fire, navCtrl, navParams, af) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.itemsRef = af.list('/device');
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({
                key: c.payload.key,
                firstname: c.payload.val().firstname,
                lastname: c.payload.val().lastname,
                address: c.payload.val().address,
                infor: c.payload.val().infor,
                phone: c.payload.val().phone,
                hide: c.payload.val().hide,
                addBy: c.payload.val().addBy
            }); });
        });
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.userid = auth.uid;
                console.log(auth);
            }
        });
    }
    NeedingPage.prototype.itemSelected = function (key, firstname, lastname, address, phone, infor, addBy) {
        console.log(key, firstname, lastname, address, phone, infor);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__showneeding_showneeding__["a" /* ShowneedingPage */], {
            key: key,
            firstname: firstname,
            lastname: lastname,
            address: address,
            phone: phone,
            infor: infor,
        });
    };
    NeedingPage.prototype.goToMain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    NeedingPage.prototype.goToAdd = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    NeedingPage.prototype.deleteMy = function (key) {
        var _this = this;
        this.itemsRef.update(key, {
            "hide": "1"
        }).then(function (newPerson) {
            var alert = _this.alertCtrl.create({
                title: 'تم الحذف',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NeedingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NeedingPage');
    };
    NeedingPage.prototype.delete = function (key) {
        console.log(key);
    };
    NeedingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-needing',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\needing\needing.html"*/`\n\n <ion-header  style="  border:3px solid #0FB9B1;" >\n\n\n\n  <ion-navbar color="tafasil"> \n\n \n\n   \n\n        <ion-buttons style="  border:3px solid #0FB9B1;" end>\n\n          <button style="  border:3px solid #0FB9B1;" ion-button color="light"  (click)="goToAdd()">\n\n              <ion-icon  style="  border:3px solid #0FB9B1;"  name=\'ios-add\' is-active="false"></ion-icon>&nbsp;\n\n              اضف\n\n          </button>\n\n        </ion-buttons>\n\n          \n\n  </ion-navbar>\n\n </ion-header>\n\n\n\n\n\n   \n\n     \n\n      <ion-content >\n\n          <img src="assets/imgs/haja.png"   /> \n\n\n\n\n\n\n\n            <ion-list>\n\n                \n\n                <div *ngFor="let item of items   | async json">\n\n                    <div  *ngIf="item.hide != \'1\'" >  \n\n                <ion-item-sliding>\n\n                  <ion-item>\n\n                      <ion-thumbnail item-start *ngIf="userid !== item.addBy">\n\n                          <img class="img1" src="./assets/imgs/about3.png">\n\n                        </ion-thumbnail>\n\n                    <ion-thumbnail item-start *ngIf="userid == item.addBy">\n\n                        <img class="img1" src="./assets/imgs/about4.png">\n\n                      </ion-thumbnail>\n\n\n\n                    <p>{{item.lastname}}</p>\n\n                    <button ion-button clear item-end \n\n                (click)="itemSelected(item.key,item.firstname,item.lastname,\n\n                item.address,item.phone,item.infor)">التفاصيل</button>\n\n \n\n                  </ion-item>\n\n                 \n\n                  <ion-item-options side="right">\n\n                    <button ion-button color="danger"  *ngIf="userid == item.addBy" (click)="deleteMy(item.key)">\n\n                      <ion-icon name="ios-trash"></ion-icon>\n\n                      حذف\n\n                    </button>\n\n                  </ion-item-options>\n\n                </ion-item-sliding>\n\n              </div>\n\n            </div>\n\n              </ion-list>\n\n\n\n  \n\n \n\n   </ion-content>\n\n  `/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\needing\needing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NeedingPage);
    return NeedingPage;
}());

//# sourceMappingURL=needing.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addneeding_addneeding__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(af, fb, googlePlus, alertCtrl, toastCtrl, fire, navCtrl, navParams) {
        var _this = this;
        this.af = af;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.peoplelist = af.list('/device');
        this.fire.auth.onAuthStateChanged(function (user) {
            // if(!user){
            //   this.navCtrl.push(LoginPage);
            // }else{
            // }
            console.log(user);
        });
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.uid = auth.uid;
                console.log(auth);
            }
        });
    }
    LoginPage.prototype.goToMain = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        if (this.email === undefined && this.password === undefined) {
            console.log('email: ' + this.email + '  password: ' + this.password);
            return this.showAlert();
        }
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addneeding_addneeding__["a" /* AddneedingPage */]);
        }).catch(function (error) {
            _this.showAlert();
        });
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'خطا ',
            subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
            buttons: ['حسنا ']
        });
        alert.present();
    };
    LoginPage.prototype.signUP = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.google = function () {
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.googlePlus.login({
            'webClientId': '614542000368-sgioom8nioq20dii53dl8r765prjrkr7.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) { return alert(res); })
            .catch(function (err) { return alert(err); });
    };
    LoginPage.prototype.facebook = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        return this.fb.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            _this.fire.auth.signInWithCredential(facebookCredential)
                .then(function (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__addneeding_addneeding__["a" /* AddneedingPage */]);
                alert("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { alert("error" + error); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\login\login.html"*/`\n\n<ion-header> \n\n  <ion-navbar  color="primary" >\n\n     <ion-title>تسجيل دخول</ion-title> \n\n     <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToMain()">\n\n        <ion-icon name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    </ion-navbar>\n\n   </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <ion-list> -->\n\n\n\n     <ion-item>\n\n         <ion-label floating> <ion-icon ios="ios-person" md="md-person" color="danger"> البريدالالكتروني</ion-icon> </ion-label>\n\n        \n\n         <ion-input type="text" [(ngModel)]="email" ></ion-input>\n\n    </ion-item>\n\n      \n\n   <ion-item>\n\n         <ion-label floating>  <ion-icon ios="ios-lock" md="md-lock" color="danger"> كلمة المرور </ion-icon></ion-label>\n\n         <ion-input type="password"  [(ngModel)]="password" ></ion-input>\n\n    </ion-item>\n\n      \n\n    \n\n  <!-- </ion-list> -->\n\n    <!-- <ion-item> -->\n\n <div padding>\n\n           \n\n  <button ion-button block large  icon-right  (click)= "  Login() " > \n\n              <ion-icon name= ios-log-in large> دخول </ion-icon>   \n\n              </button>\n\n     <!-- </ion-item> -->\n\n        \n\n        <p text-center> اذا لم تمتلك حسابا قم بالتسجيل اولا </p>  \n\n      \n\n      <!-- <ion-item> -->\n\n      <button ion-button block large  icon-right (click)="signUP()">\n\n        <div style="margin: 8px">انشاء حساب</div>\n\n          <ion-icon name= ios-log-in  large>  </ion-icon> \n\n      </button>\n\n      <!-- </ion-item> -->\n\n\n\n \n\n\n\n  </div>\n\n\n\n</ion-content>\n\n  \n\n\n\n`/*ion-inline-end:"C:\Users\AliPr\Desktop\ionic\Ahel-Alkheer\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map