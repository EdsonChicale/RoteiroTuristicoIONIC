(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terca-home-module"],{

/***/ "./src/app/terca/home.module.ts":
/*!**************************************!*\
  !*** ./src/app/terca/home.module.ts ***!
  \**************************************/
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/terca/home.page.ts");







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

/***/ "./src/app/terca/home.page.html":
/*!**************************************!*\
  !*** ./src/app/terca/home.page.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Bem Vindo  ao Roteiro turistico\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/fenda.jpg\"></ion-img>\n      \n      \n    </ion-card>\n    <ion-card-header>\n      <ion-card-title>Bem vindo ao Cabo-Ledo</ion-card-title>\n      <ion-card-subtitle>Luanda</ion-card-subtitle>\n\n    </ion-card-header>\n    <ion-card-content>\n    O Cabo Ledo é uma larga enseada situada na província de Luanda, em pleno Parque Nacional da Quissama, em Angola.\nA 120 km a sul da cidade de Luanda, a amplidão das praias de águas límpidas do Cabo Ledo, a beleza das imensas falésias no entorno de uma extensa faixa de areia branca tornam este um local deslumbrante, também propício à prática da pesca e do surf.\nO Cabo Ledo possui, também, um inestimável valor histórico, pois em 1648 aqui desembarcou a frota que, vinda do Brasil, recuperou Angola para o domínio português, após sete anos sob dominação holandesa.\n  </ion-card-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/terca/home.page.scss":
/*!**************************************!*\
  !*** ./src/app/terca/home.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*.background ion-content{\n // --background: url(/assets/angola.jpg);\n  --background-image: url(/src/assets/angola.jpg);\n background-color: aqua;\n}*/\n\nion-content.background {\n  --background: url(/assets/angola.jpg); }\n\n/*ion-button.botao1{\n --margin-bottom: 0px;\n --margin-right: 40px;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVyY2EvQzpcXFVzZXJzXFxFZHNvbiBDaGljYWxlXFxjYXJkYXBpby1tb3ZlbC9zcmNcXGFwcFxcdGVyY2FcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC90ZXJjYS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7Ozs7RUNFRTs7QURHRjtFQUVFLHFDQUFhLEVBQUE7O0FBRWY7OztFQ0FFIiwiZmlsZSI6InNyYy9hcHAvdGVyY2EvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLy9iYWNrZ3JvdW5kLWltYWdlOiBcbiAvLyAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpXG59XG4vKi5iYWNrZ3JvdW5kIGlvbi1jb250ZW50e1xuIC8vIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLmpwZyk7XG4gIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2FuZ29sYS5qcGcpO1xuIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59Ki9cbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjojQUY1OTIxO1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpO1xufVxuLyppb24tYnV0dG9uLmJvdGFvMXtcbiAtLW1hcmdpbi1ib3R0b206IDBweDtcbiAtLW1hcmdpbi1yaWdodDogNDBweDtcbn0qL1xuXG5cblxuXG5cbiIsIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLyouYmFja2dyb3VuZCBpb24tY29udGVudHtcbiAvLyAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpO1xuICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9hbmdvbGEuanBnKTtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufSovXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEuanBnKTsgfVxuXG4vKmlvbi1idXR0b24uYm90YW8xe1xuIC0tbWFyZ2luLWJvdHRvbTogMHB4O1xuIC0tbWFyZ2luLXJpZ2h0OiA0MHB4O1xufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/terca/home.page.ts":
/*!************************************!*\
  !*** ./src/app/terca/home.page.ts ***!
  \************************************/
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
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/terca/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/terca/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=terca-home-module.js.map