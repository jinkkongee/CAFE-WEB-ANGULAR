(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <ng-flash-message></ng-flash-message>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src in MEANAuthApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_owner_owner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/owner/owner.component */ "./src/app/components/owner/owner.component.ts");
/* harmony import */ var _components_menugraziecoffee_menugraziecoffee_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/menugraziecoffee/menugraziecoffee.component */ "./src/app/components/menugraziecoffee/menugraziecoffee.component.ts");
/* harmony import */ var _components_searchcafe_searchcafe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/searchcafe/searchcafe.component */ "./src/app/components/searchcafe/searchcafe.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_menugrazielatte_menugrazielatte_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/menugrazielatte/menugrazielatte.component */ "./src/app/components/menugrazielatte/menugrazielatte.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'owner', component: _components_owner_owner_component__WEBPACK_IMPORTED_MODULE_16__["OwnerComponent"] },
    { path: 'searchcafe', component: _components_searchcafe_searchcafe_component__WEBPACK_IMPORTED_MODULE_18__["SearchcafeComponent"] },
    { path: 'order', component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_19__["OrderComponent"] },
    { path: 'menugraziecoffee', component: _components_menugraziecoffee_menugraziecoffee_component__WEBPACK_IMPORTED_MODULE_17__["MenugraziecoffeeComponent"] },
    { path: 'menugrazielatte', component: _components_menugrazielatte_menugrazielatte_component__WEBPACK_IMPORTED_MODULE_20__["MenugrazielatteComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_owner_owner_component__WEBPACK_IMPORTED_MODULE_16__["OwnerComponent"],
                _components_menugraziecoffee_menugraziecoffee_component__WEBPACK_IMPORTED_MODULE_17__["MenugraziecoffeeComponent"],
                _components_searchcafe_searchcafe_component__WEBPACK_IMPORTED_MODULE_18__["SearchcafeComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_19__["OrderComponent"],
                _components_menugrazielatte_menugrazielatte_component__WEBPACK_IMPORTED_MODULE_20__["MenugrazielatteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_14__["NgFlashMessagesModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Dashboard </h2>\n<p> Welcome to Your dashboard</p>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Header -->\n    <section class=\"masthead d-flex\">\n      <div class=\"container text-center my-auto\">\n        <h1 class=\"mb-1\">WELCOM CAFE 공사</h1>\n        <h3 class=\"mb-5\">\n          <em><h4>당신의 카페 주문을 더욱 쉽고 빠르게!</h4></em>\n        </h3>\n        <p class = \"lead mb-5\"> 홈페이지로 간단하게 메뉴와 위치를 확인하고 앱에서 주문하세요! <br>당신의 카페 주문이 더욱 쉽고 간편해 집니다.</p>\n        <h5><h5>My cafe를 사용하고 계시는 사장님이라면?</h5><br>\n        <a class =\"btn btn-dark btn-xl js-scroll-trigger\" [routerLink]=\"['/owner']\">사장님 페이지  GO GO</a>\n      </h5>\n    </div>\n  </section>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='username' name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'success',
                    timeout: 3000
                });
                _this.router.navigate(['']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menugraziecoffee/menugraziecoffee.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/menugraziecoffee/menugraziecoffee.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/menugraziecoffee/menugraziecoffee.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/menugraziecoffee/menugraziecoffee.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class =\"content-section bg-light\" id=\"info\">\n\t<div class =\"info\">\n\t\t<h2 class=\"text-center mb-5\">\n\t\t\t<em><h2>연구관 그라지에(Grazie)</h2></em>\n\t\t</h2>\n\t</div>\n</section>\n\n<!--menutoggle-->\n<section class =\"menubar\">\n\t<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" [routerLink]=\"['menugraziecoffee']\">COFFEE</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugrazielatte']\">LATTE</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugraziecoffee']\">TEA</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugraziecoffee']\">SMOOTHIE</a>\n  </li>\n</ul>\n</section>\n\n<!--MENU-->\n<section class = \"content-section\" id=\"menu\">\n\t<div class=\"menu\">\n\t\t<div class =\"row\">\n\t\t\t<div class =\"te-center my-auto btn-xl\">\n\t\t\t\t<figure class=\"figure ml-10\">\n\t\t\t\t\t<img src =\"assets/img/americano.jpg\" height = 150px width = 150px>\n\t\t\t\t\t<figcaption class=\"figure-caption\"> AMERICANO(HOT/ICE)</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<figure class=\"figure ml-10\">\n\t\t\t\t\t<img src =\"assets/img/hazelnut.png\" height = 180px width = 160px>\n\t\t\t\t\t<figcaption class=\"figure-caption\">HAZELNUT(HOT/ICE)</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<figure class=\"figure ml-10\">\n\t\t\t\t\t<img src =\"assets/img/viena.jpg\" height = 150px width = 150px>\n\t\t\t\t\t<figcaption class=\"figure-caption\">VIENNA COFFE(HOT/ICE)</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t<figure class=\"figure ml-10\">\n\t\t\t\t\t<img src =\"assets/img/viena.jpg\" height = 150px width = 150px>\n\t\t\t\t\t<figcaption class=\"figure-caption\">VIENNA COFFE(HOT/ICE)</figcaption>\n\t\t\t\t</figure>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/menugraziecoffee/menugraziecoffee.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/menugraziecoffee/menugraziecoffee.component.ts ***!
  \***************************************************************************/
/*! exports provided: MenugraziecoffeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenugraziecoffeeComponent", function() { return MenugraziecoffeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenugraziecoffeeComponent = /** @class */ (function () {
    function MenugraziecoffeeComponent() {
    }
    MenugraziecoffeeComponent.prototype.ngOnInit = function () {
    };
    MenugraziecoffeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menugraziecoffee',
            template: __webpack_require__(/*! ./menugraziecoffee.component.html */ "./src/app/components/menugraziecoffee/menugraziecoffee.component.html"),
            styles: [__webpack_require__(/*! ./menugraziecoffee.component.css */ "./src/app/components/menugraziecoffee/menugraziecoffee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenugraziecoffeeComponent);
    return MenugraziecoffeeComponent;
}());



/***/ }),

/***/ "./src/app/components/menugrazielatte/menugrazielatte.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/menugrazielatte/menugrazielatte.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/menugrazielatte/menugrazielatte.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/menugrazielatte/menugrazielatte.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class =\"content-section bg-light\" id=\"info\">\n\t<div class =\"info\">\n\t\t<h2 class=\"text-center mb-5\">\n\t\t\t<em><h2>연구관 그라지에(Grazie)</h2></em>\n\t\t</h2>\n\t</div>\n</section>\n\n<!--menutoggle-->\n<section class =\"menubar\">\n\t<ul class=\"nav nav-tabs\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugraziecoffee']\">COFFEE</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link  active\" [routerLink]=\"['menugrazilatte']\">LATTE</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugraziecoffee']\">TEA</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['menugraziecoffee']\">SMOOTHIE</a>\n  </li>\n</ul>\n</section>\n\n<!--MENU-->\n<section class = \"content-section\" id=\"menu\">\n\t<div class=\"menu\">\n\t\t<div class =\"row\">\n\t\t\t<div class =\"te-center my-auto btn-xl\">\n\t\t\t\t\n\t\t\t\t<figure class=\"figure ml-10\">\n\t\t\t\t\t<img src =\"assets/img/latte.jpg\" height = 150px width = 150px>\n\t\t\t\t\t<figcaption class=\"figure-caption\">LATTE(HOT/ICE)</figcaption>\n\t\t\t\t</figure>\n\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/menugrazielatte/menugrazielatte.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/menugrazielatte/menugrazielatte.component.ts ***!
  \*************************************************************************/
/*! exports provided: MenugrazielatteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenugrazielatteComponent", function() { return MenugrazielatteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenugrazielatteComponent = /** @class */ (function () {
    function MenugrazielatteComponent() {
    }
    MenugrazielatteComponent.prototype.ngOnInit = function () {
    };
    MenugrazielatteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menugrazielatte',
            template: __webpack_require__(/*! ./menugrazielatte.component.html */ "./src/app/components/menugrazielatte/menugrazielatte.component.html"),
            styles: [__webpack_require__(/*! ./menugrazielatte.component.css */ "./src/app/components/menugrazielatte/menugrazielatte.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenugrazielatteComponent);
    return MenugrazielatteComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['']\">MY CAFE</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['login']\">LOGIN <span class=\"sr-only\">(current)</span></a>\n      </li>\n       <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['register']\">JOIN<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['searchcafe']\">카페 찾기</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/owner']\">사장님 페이지</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['']\">의견 보내기</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['You are logged out'],
            type: 'success',
            timeout: 3000
        });
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-section bg-light\" id=\"title\">\n\t<div class =\"title\">\n\t\t<div class =\"container my-auto\">\n\t\t\t<h2 class=\"text-center mb-5\">\n\t\t\t\t<em><h1> 연구동 GRAZIE </h1></em>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/owner/owner.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/owner/owner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Stylish Portfolio v5.0.1 (https://startbootstrap.com/template-overviews/stylish-portfolio)\r\n * Copyright 2013-2018 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\r\n */\r\n\r\nbody,\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro';\r\n}\r\n\r\n.btn-xl {\r\n  padding: 1.25rem 2.5rem;\r\n}\r\n\r\n.content-section {\r\n  padding-top: 7.5rem;\r\n  padding-bottom: 7.5rem;\r\n}\r\n\r\n.content-section-heading h2 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.content-section-heading h3 {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 700;\r\n}\r\n\r\n.text-faded {\r\n  color: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Map */\r\n\r\n.map {\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .map {\r\n    height: 75%;\r\n  }\r\n}\r\n\r\n.map iframe {\r\n  pointer-events: none;\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 45px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.masthead {\r\n  min-height: 30rem;\r\n  position: relative;\r\n  display: table;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 8rem;\r\n  padding-bottom: 8rem;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.masthead h1 {\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(http://themes.googleusercontent.com/static/fonts/lato/v7/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n}\r\n\r\nbody {\r\n  background: #448ed3 ;\r\n  font-family: \"Lato\" ;\r\n}\r\n\r\n.wrap {\r\n  width:250px;\r\n  height: auto;\r\n  margin: auto;\r\n  margin-top: 10%;\r\n}\r\n\r\n.avatar {\r\n  width: 100%;\r\n  margin: auto;\r\n  width: 65px;\r\n  border-radius: 100px;\r\n  height: 65px;\r\n  background: #448ed3 ;\r\n  position: relative;\r\n  bottom: -15px;\r\n}\r\n\r\n.avatar img {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 100px;\r\n  margin: auto;\r\n  border:3px solid #fff;\r\n  display: block;\r\n}\r\n\r\n.wrap input {\r\n  border: none;\r\n  background: #fff;\r\n  font-family:Lato ;\r\n  font-weight:700 ;\r\n  display: block;\r\n  height: 40px;\r\n  outline: none;\r\n  width: calc(100% - 24px) ;\r\n  margin: auto;\r\n  padding: 6px 12px 6px 12px;\r\n}\r\n\r\n.bar {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: #fff ;\r\n}\r\n\r\n.bar i {\r\n  width: 95%;\r\n  margin: auto;\r\n  height: 1px ;\r\n  display: block;\r\n  background: #d1d1d1;\r\n}\r\n\r\n.wrap input[type=\"text\"] {\r\n  border-radius: 7px 7px 0px 0px ;\r\n}\r\n\r\n.wrap input[type=\"password\"] {\r\n  border-radius: 0px 0px 7px 7px ;\r\n}\r\n\r\n.forgot_link {\r\n  color: #83afdf ;\r\n  color: #83afdf;\r\n  text-decoration: none;\r\n  font-size: 11px;\r\n  position: relative;\r\n  left: 193px;\r\n  top: -36px;\r\n}\r\n\r\n.wrap button {\r\n  width: 100%;\r\n  border-radius: 7px;\r\n  background: #b6ee65;\r\n  -webkit-text-decoration: center;\r\n          text-decoration: center;\r\n  border: none;\r\n  color: #51771a;\r\n  margin-top:-5px;\r\n  padding-top: 14px;\r\n  padding-bottom: 14px;\r\n  outline: none;\r\n  font-size: 13px;  \r\n  border-bottom: 3px solid #307d63;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .masthead {\r\n    height: 100vh;\r\n  }\r\n  .masthead h1 {\r\n    font-size: 5.5rem;\r\n  }\r\n}\r\n\r\n#demo\r\n    {\r\n      background-repeat: no-repeat;\r\n      width: 20px;\r\n      height: 10px;\r\n    }\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\nul {\r\n    list-style:none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n/* Side Menu */\r\n\r\n#sidebar-wrapper {\r\n  position: fixed;\r\n  z-index: 2;\r\n  right: 0;\r\n  width: 250px;\r\n  height: 100%;\r\n  transition: all 0.4s ease 0s;\r\n  -webkit-transform: translateX(250px);\r\n  transform: translateX(250px);\r\n  background: #1D809F;\r\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 250px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li.sidebar-nav-item a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active,\r\n.sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand {\r\n  font-size: 1.2rem;\r\n  background: rgba(52, 58, 64, 0.1);\r\n  height: 80px;\r\n  line-height: 50px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a {\r\n  color: #fff;\r\n}\r\n\r\n.sidebar-nav > .sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n#sidebar-wrapper.active {\r\n  right: 250px;\r\n  width: 250px;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n\r\n.menu-toggle {\r\n  position: fixed;\r\n  right: 15px;\r\n  top: 15px;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 50px;\r\n  z-index: 999;\r\n}\r\n\r\n.menu-toggle:focus, .menu-toggle:hover {\r\n  color: #fff;\r\n}\r\n\r\n.menu-toggle:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.service-icon {\r\n  background-color: #fff;\r\n  color: #1D809F;\r\n  height: 7rem;\r\n  width: 7rem;\r\n  display: block;\r\n  line-height: 7.5rem;\r\n  font-size: 2.25rem;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.callout {\r\n  padding: 15rem 0;\r\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.callout h2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  display: block;\r\n  max-width: 30rem;\r\n}\r\n\r\n.portfolio-item {\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  max-width: 530px;\r\n  margin: auto auto 1rem;\r\n}\r\n\r\n.portfolio-item .caption {\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: rgba(33, 37, 41, 0.2);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.portfolio-item .caption .caption-content {\r\n  color: #fff;\r\n  margin: auto 2rem 2rem;\r\n}\r\n\r\n.portfolio-item .caption .caption-content h2 {\r\n  font-size: 0.8rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.portfolio-item .caption .caption-content p {\r\n  font-weight: 300;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .portfolio-item {\r\n    max-width: none;\r\n    margin: 0;\r\n  }\r\n  .portfolio-item .caption {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out, background-color 0.7s;\r\n    -webkit-clip-path: inset(0px);\r\n    clip-path: inset(0px);\r\n  }\r\n  .portfolio-item .caption .caption-content {\r\n    transition: opacity 0.25s;\r\n    margin-left: 5rem;\r\n    margin-right: 5rem;\r\n    margin-bottom: 5rem;\r\n  }\r\n  .portfolio-item img {\r\n    -webkit-transition: -webkit-clip-path 0.25s ease-out;\r\n    -webkit-clip-path: inset(-1px);\r\n    clip-path: inset(-1px);\r\n  }\r\n  .portfolio-item:hover img {\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n  .portfolio-item:hover .caption {\r\n    background-color: rgba(29, 128, 159, 0.9);\r\n    -webkit-clip-path: inset(2rem);\r\n    clip-path: inset(2rem);\r\n  }\r\n}\r\n\r\nfooter.footer {\r\n  padding-top: 5rem;\r\n  padding-bottom: 5rem;\r\n}\r\n\r\nfooter.footer .social-link {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  line-height: 4.3rem;\r\n  font-size: 1.5rem;\r\n  background-color: #1D809F;\r\n  transition: background-color 0.15s ease-in-out;\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nfooter.footer .social-link:hover {\r\n  background-color: #155d74;\r\n  text-decoration: none;\r\n}\r\n\r\na {\r\n  color: #1D809F;\r\n}\r\n\r\na:hover, a:focus, a:active {\r\n  color: #155d74;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #1D809F !important;\r\n  border-color: #1D809F !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background-color: #155d74 !important;\r\n  border-color: #155d74 !important;\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ecb807 !important;\r\n  border-color: #ecb807 !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {\r\n  background-color: #ba9106 !important;\r\n  border-color: #ba9106 !important;\r\n}\r\n\r\n.btn-dark {\r\n  color: #fff !important;\r\n}\r\n\r\n.btn {\r\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);\r\n  font-weight: 700;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #1D809F !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #1D809F !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ecb807 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/owner/owner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/owner/owner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-section bg-light\" id=\"info\">\n\t<div class=\"info\">\n\t\t<div class=\"container my-auto\">\n\t\t\t<h2 class=\"text-center mb-5\">\n\t\t\t\t<em><h1> 어서오세요 사장님 </h1></em>\n\t\t\t</h2>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"content-section\" id = \"login\">\n\t<h2 class=\"page-header\">Login</h2>\n\t<form (submit)=\"onLoginSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]='username' name=\"username\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>password</label>\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]='password' name=\"password\">\n\t\t</div>\n\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n\t</form>\n</section>"

/***/ }),

/***/ "./src/app/components/owner/owner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/owner/owner.component.ts ***!
  \*****************************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    OwnerComponent.prototype.ngOnInit = function () {
    };
    OwnerComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'success',
                    timeout: 3000
                });
                _this.router.navigate(['order']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    OwnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/components/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.css */ "./src/app/components/owner/owner.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\"> {{user.name}} </h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>  \n    <li class=\"list-group-item\">Email: {{user.email}}</li>  \n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\"  class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n    <input type=\"submit\" class=\"btn btn=primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.showFlashMessage({ messages: ['Please fill in all fields'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({ messages: ['Please use a valid email'], type: 'danger', timeout: 2000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['You are now registered and can login '],
                    type: 'success',
                    timeout: 2000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.flashMessage.showFlashMessage({ messages: ['Something went wrong'],
                    type: 'danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/searchcafe/searchcafe.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/searchcafe/searchcafe.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchcafe/searchcafe.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/searchcafe/searchcafe.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SEARCH CAFE -->\n<br>\n<br>\n    <section class=\"content-section text-black text-center\" id=\"services\">\n      <div class=\"container\">\n        <form>\n              <div class=\"form-row col-lg-8 mx-auto\">\n              <h2 class=\"text-secondary mb-0\">SEARCH</h2>\n                <div class=\"col-5 col-md-7 mb-5\">\n                  <input type=\"cafename\" class=\"form-control form-control-lg\" placeholder=\"search your cafe...\">\n                </div>\n                <div class=\"col-10 col-md-2\">\n                  <button type=\"submit\" class=\"btn btn-warning btn-lg btn-warning\">검색하기</button>\n                </div>\n              </div>\n        </form>\n        \n        <div class=\"row\">\n\n          <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n          \n            \n            <h4>\n              <a class = cafe [routerLink]=\"['/menugraziecoffee']\">\n               <img src =\"assets/img/grazie.jpg\" height = 150px width = 150px>\n               <br><br><strong>연구관 Grazie</strong>\n              </a>\n            </h4>\n            \n          </div>\n          \n          <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n            <h4>\n              <a class = cafe [routerLink]=\"['/menugraziecoffee']\">\n                <img src =\"assets/img/grazie.jpg\" height = 150px width = 150px>\n                <br><br><strong>미래관 Grazie</strong>\n              </a>\n            </h4>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n            <h4>\n              <a class = cafe>\n                <img src =\"assets/img/ediya2.png\" height = 150px width = 150px>\n                <br><br><strong>이디야</strong>\n              </a>\n            </h4>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\n            <h4>\n              <a class = cafe>\n                <img src =\"assets/img/hollys.png\" height = 150px width = 150px>\n                <br><br><strong>할리스</strong>\n              </a>\n            </h4>\n          </div>\n        </div>\n      </div>\n    </section>"

/***/ }),

/***/ "./src/app/components/searchcafe/searchcafe.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/searchcafe/searchcafe.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchcafeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcafeComponent", function() { return SearchcafeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchcafeComponent = /** @class */ (function () {
    function SearchcafeComponent() {
    }
    SearchcafeComponent.prototype.ngOnInit = function () {
    };
    SearchcafeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchcafe',
            template: __webpack_require__(/*! ./searchcafe.component.html */ "./src/app/components/searchcafe/searchcafe.component.html"),
            styles: [__webpack_require__(/*! ./searchcafe.component.css */ "./src/app/components/searchcafe/searchcafe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchcafeComponent);
    return SearchcafeComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\web\testtt\MeanAuthApp-master\MeanAuthApp-master\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map