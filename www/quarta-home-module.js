(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quarta-home-module"],{

/***/ "./src/app/quarta/home.module.ts":
/*!***************************************!*\
  !*** ./src/app/quarta/home.module.ts ***!
  \***************************************/
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/quarta/home.page.ts");







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

/***/ "./src/app/quarta/home.page.html":
/*!***************************************!*\
  !*** ./src/app/quarta/home.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Serra da Leba\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/leba.jpg\"></ion-img>\n      \n      \n    </ion-card>\n    <ion-card-header>\n      <ion-card-title>Bem vindo a Serra da Leba</ion-card-title>\n      <ion-card-subtitle>Lubango</ion-card-subtitle>\n\n    </ion-card-header>\n    <ion-card-content>\n   A Serra da Leba é uma formação montanhosa na província da Huíla, em Angola.\nLocalizada perto da cidade do Lubango, a Serra da Leba é famosa pela altitude, pela sua beleza e também pela estrada que a serpenteia.\n  </ion-card-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/quarta/home.page.scss":
/*!***************************************!*\
  !*** ./src/app/quarta/home.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*.background ion-content{\n // --background: url(/assets/angola.jpg);\n  --background-image: url(/src/assets/angola.jpg);\n background-color: aqua;\n}*/\n\nion-content.background {\n  --background: url(/assets/angola.jpg); }\n\n/*ion-button.botao1{\n --margin-bottom: 0px;\n --margin-right: 40px;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhcnRhL0M6XFxVc2Vyc1xcRWRzb24gQ2hpY2FsZVxcY2FyZGFwaW8tbW92ZWwvc3JjXFxhcHBcXHF1YXJ0YVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3F1YXJ0YS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7Ozs7RUNFRTs7QURHRjtFQUVFLHFDQUFhLEVBQUE7O0FBRWY7OztFQ0FFIiwiZmlsZSI6InNyYy9hcHAvcXVhcnRhL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8vYmFja2dyb3VuZC1pbWFnZTogXG4gLy8gLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEuanBnKVxufVxuLyouYmFja2dyb3VuZCBpb24tY29udGVudHtcbiAvLyAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2FuZ29sYS5qcGcpO1xuICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9hbmdvbGEuanBnKTtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufSovXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xuIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0FGNTkyMTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEuanBnKTtcbn1cbi8qaW9uLWJ1dHRvbi5ib3RhbzF7XG4gLS1tYXJnaW4tYm90dG9tOiAwcHg7XG4gLS1tYXJnaW4tcmlnaHQ6IDQwcHg7XG59Ki9cblxuXG5cblxuXG4iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi8qLmJhY2tncm91bmQgaW9uLWNvbnRlbnR7XG4gLy8gLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9hbmdvbGEuanBnKTtcbiAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9hc3NldHMvYW5nb2xhLmpwZyk7XG4gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn0qL1xuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYW5nb2xhLmpwZyk7IH1cblxuLyppb24tYnV0dG9uLmJvdGFvMXtcbiAtLW1hcmdpbi1ib3R0b206IDBweDtcbiAtLW1hcmdpbi1yaWdodDogNDBweDtcbn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/quarta/home.page.ts":
/*!*************************************!*\
  !*** ./src/app/quarta/home.page.ts ***!
  \*************************************/
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
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/quarta/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/quarta/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=quarta-home-module.js.map