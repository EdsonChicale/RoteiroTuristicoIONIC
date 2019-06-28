(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







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

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Bem Vindo  ao Roteiro turistico\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n    <!----ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/angola.jpg\"></ion-img>\n      \n      \n    </ion-card-->\n    <ion-card>\n    <ion-slides pager>\n\n      <ion-slide>\n\n        <ion-img src=\"/assets/fenda.jpg\"></ion-img>\n        \n      </ion-slide>\n    \n      <ion-slide>\n        <ion-img src=\"/assets/caboledo.jpg\"></ion-img>\n        \n      </ion-slide>\n    \n      <ion-slide>\n        <ion-img src=\"/assets/leba.jpg\"><h2>Serra da Leba</h2></ion-img>\n        \n      </ion-slide>\n    \n    </ion-slides>\n    <ion-card-subtitle color=\"primary\">\n        Angola, oficialmente República de Angola, é um país da costa ocidental da África, cujo território principal é limitado a norte e a nordeste pela República Democrática do Congo, a leste pela Zâmbia, a sul pela Namíbia e a oeste pelo Oceano Atlântico. Inclui também o exclave de Cabinda, através do qual faz fronteira com a República do Congo, a norte. Para além dos vizinhos já mencionados, Angola é o país mais próximo da colónia britânica de Santa Helena.\n        Neste Aplicativo iremos mostrar alguns pontos turisticos de Angola.\n\n    </ion-card-subtitle>\n\n  </ion-card>\n\n    <!----ion-button slot=\"\" class=\"botao1\">\nEdson\n    </ion-button-->\n\n    <ion-card>\n        <ion-img src=\"/assets/gif.gif\"></ion-img>\n    </ion-card>\n    \n    \n   \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n   \n    <ion-text class=\"texto\"> © Edson Chicale - 150695</ion-text>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*.background ion-content{\n // --background: url(/assets/angola.png);\n  --background-image: url(/src/assets/angola.jpg);\n background-color: aqua;\n}*/\n\nion-content.background {\n  --background: url(/assets/angola.png); }\n\n/*ion-button.botao1{\n --margin-bottom: 0px;\n --margin-right: 40px;\n}*/\n\n.texto {\n  color: #000080;\n  text-align: center;\n  margin-left: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEVkc29uIENoaWNhbGVcXGNhcmRhcGlvLW1vdmVsL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7Ozs7RUNFRTs7QURHRjtFQUVFLHFDQUFhLEVBQUE7O0FBRWY7OztFQ0FFOztBRElGO0VBRUUsY0FBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLy9iYWNrZ3JvdW5kLWltYWdlOiBcbiAvLyAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpXG59XG4vKi5iYWNrZ3JvdW5kIGlvbi1jb250ZW50e1xuIC8vIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLnBuZyk7XG4gIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2FuZ29sYS5qcGcpO1xuIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59Ki9cbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjojQUY1OTIxO1xuICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5wbmcpO1xufVxuLyppb24tYnV0dG9uLmJvdGFvMXtcbiAtLW1hcmdpbi1ib3R0b206IDBweDtcbiAtLW1hcmdpbi1yaWdodDogNDBweDtcbn0qL1xuLnRleHRvIHtcblxuICBjb2xvcjojMDAwMDgwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuXG5cblxuXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi8qLmJhY2tncm91bmQgaW9uLWNvbnRlbnR7XG4gLy8gLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEucG5nKTtcbiAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvYW5nb2xhLmpwZyk7XG4gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0qL1xuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLnBuZyk7IH1cblxuLyppb24tYnV0dG9uLmJvdGFvMXtcbiAtLW1hcmdpbi1ib3R0b206IDBweDtcbiAtLW1hcmdpbi1yaWdodDogNDBweDtcbn0qL1xuLnRleHRvIHtcbiAgY29sb3I6ICMwMDAwODA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
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
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map