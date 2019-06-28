(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segunda-home-module"],{

/***/ "./src/app/segunda/home.module.ts":
/*!****************************************!*\
  !*** ./src/app/segunda/home.module.ts ***!
  \****************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/segunda/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/segunda/home.page.html":
/*!****************************************!*\
  !*** ./src/app/segunda/home.page.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Bem Vindo  ao Roteiro turistico\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/fenda.jpg\"></ion-img>\n      \n      \n    </ion-card>\n    <ion-card-header>\n      <ion-card-title>Bem vindo a Fenda da Tundavala</ion-card-title>\n      <ion-card-subtitle>Lubango</ion-card-subtitle>\n\n    </ion-card-header>\n    <ion-card-content>\n    A Fenda da Tundavala é um enorme abismo de cerca de 1200 m situado na Serra da Leba, a 18 km do Lubango, na província da Huíla, em Angola.\n    É nos penhascos da Tundavala que termina o Planalto Central de Angola. Aqui o planalto excede 2200 metros de altitude e cai abruptamente para cerca de 1000 metros de altitude, provocando um desnível deslumbrante com fendas colossais na montanha. Daqui se desfruta uma paisagem magnífica que se estende por dezenas de quilómetros.\n    O fenómeno natural deu o nome ao Estádio Nacional da Tundavala, no Lubango, que acolheu os jogos do grupo D do Campeonato Africano das Nações de 2010 onde jogaram as selecções dos Camarões, Gabão, Tunísia e Zâmbia.\n  </ion-card-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/segunda/home.page.scss":
/*!****************************************!*\
  !*** ./src/app/segunda/home.page.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*.background ion-content{\n // --background: url(/assets/angola.jpg);\n  --background-image: url(/src/assets/angola.jpg);\n background-color: aqua;\n}*/\n\nion-content.background {\n  --background: url(/assets/angola.jpg); }\n\n/*ion-button.botao1{\n --margin-bottom: 0px;\n --margin-right: 40px;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VndW5kYS9DOlxcVXNlcnNcXEVkc29uIENoaWNhbGVcXGNhcmRhcGlvLW1vdmVsL3NyY1xcYXBwXFxzZWd1bmRhXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VndW5kYS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7Ozs7RUNFRTs7QURHRjtFQUVFLHFDQUFhLEVBQUE7O0FBRWY7OztFQ0FFIiwiZmlsZSI6InNyYy9hcHAvc2VndW5kYS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vL2JhY2tncm91bmQtaW1hZ2U6IFxuIC8vIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLmpwZylcbn1cbi8qLmJhY2tncm91bmQgaW9uLWNvbnRlbnR7XG4gLy8gLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEuanBnKTtcbiAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvYW5nb2xhLmpwZyk7XG4gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0qL1xuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNBRjU5MjE7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLmpwZyk7XG59XG4vKmlvbi1idXR0b24uYm90YW8xe1xuIC0tbWFyZ2luLWJvdHRvbTogMHB4O1xuIC0tbWFyZ2luLXJpZ2h0OiA0MHB4O1xufSovXG5cblxuXG5cblxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4vKi5iYWNrZ3JvdW5kIGlvbi1jb250ZW50e1xuIC8vIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLmpwZyk7XG4gIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2FuZ29sYS5qcGcpO1xuIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59Ki9cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpOyB9XG5cbi8qaW9uLWJ1dHRvbi5ib3RhbzF7XG4gLS1tYXJnaW4tYm90dG9tOiAwcHg7XG4gLS1tYXJnaW4tcmlnaHQ6IDQwcHg7XG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/segunda/home.page.ts":
/*!**************************************!*\
  !*** ./src/app/segunda/home.page.ts ***!
  \**************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/segunda/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/segunda/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=segunda-home-module.js.map