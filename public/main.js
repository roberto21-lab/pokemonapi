(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Bdac/Desktop/pokemon/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiURL: 'https://pokeapi.co/api/v2/'
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

/***/ "BhP2":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tarjeta {\n  width: 100%;\n  height: 120px;\n  background: white;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n  border: solid 2px;\n  padding: 10px;\n  position: relative;\n  background: rgba(249, 249, 249, 0.52);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 1px solid #3a8a3a8c;\n}\n.tarjeta .mini-taj {\n  width: 50%;\n  border-radius: 20px;\n  text-align: center;\n  color: white;\n  font-size: 0.7rem;\n}\n.tarjeta-acero {\n  border-color: LightGrey;\n}\n.tarjeta-acero .mini-taj {\n  background: LightGrey;\n}\n.tarjeta-water {\n  border-color: RoyalBlue;\n}\n.tarjeta-water .mini-taj {\n  background: RoyalBlue;\n}\n.tarjeta-bug {\n  border-color: YellowGreen;\n}\n.tarjeta-bug .mini-taj {\n  background: YellowGreen;\n}\n.tarjeta-dragon {\n  border-color: MediumSlateBlue;\n}\n.tarjeta-dragon .mini-taj {\n  background: MediumSlateBlue;\n}\n.tarjeta-electric {\n  border-color: #8d8d0c;\n}\n.tarjeta-electric .mini-taj {\n  background: #8d8d0c;\n}\n.tarjeta-ghost {\n  border-color: Purple;\n}\n.tarjeta-ghost .mini-taj {\n  background: Purple;\n}\n.tarjeta-fire {\n  border-color: Crimson;\n}\n.tarjeta-fire .mini-taj {\n  background: Crimson;\n}\n.tarjeta-fairy {\n  border-color: #ff88ee;\n}\n.tarjeta-fairy .mini-taj {\n  background: #ff88ee;\n}\n.tarjeta-ice {\n  border-color: AquaMarine;\n}\n.tarjeta-ice .mini-taj {\n  background: AquaMarine;\n}\n.tarjeta-fighting {\n  border-color: Firebrick;\n}\n.tarjeta-fighting .mini-taj {\n  background: Firebrick;\n}\n.tarjeta-normal {\n  border-color: #747479;\n}\n.tarjeta-normal .mini-taj {\n  background: #747479;\n}\n.tarjeta-grass {\n  border-color: Lime;\n}\n.tarjeta-grass .mini-taj {\n  background: Lime;\n}\n.tarjeta-psychic {\n  border-color: #d61bd6;\n}\n.tarjeta-psychic .mini-taj {\n  background: #d61bd6;\n}\n.tarjeta-rock {\n  border-color: Peru;\n}\n.tarjeta-rock .mini-taj {\n  background: Peru;\n}\n.tarjeta-sinistro {\n  border-color: SlateGray;\n}\n.tarjeta-sinistro .mini-taj {\n  background: SlateGray;\n}\n.tarjeta-ground {\n  border-color: #7c684e;\n}\n.tarjeta-ground .mini-taj {\n  background: #7c684e;\n}\n.tarjeta-veneno {\n  border-color: Mediumpurple;\n}\n.tarjeta-veneno .mini-taj {\n  background: Mediumpurple;\n}\n.tarjeta-dark {\n  border-color: #110e18;\n}\n.tarjeta-dark .mini-taj {\n  background: #110e18;\n}\n.numero {\n  text-align: right;\n  color: black;\n  font-size: 0.9rem;\n}\n.nombre {\n  margin-bottom: 5px;\n  color: black;\n  font-size: 0.9rem;\n}\n.mini-taj {\n  width: 50%;\n  background: #6bb16b;\n  border-radius: 20px;\n  text-align: center;\n  color: white;\n  font-size: medium;\n}\n.hola {\n  margin-top: 10px;\n}\nimg {\n  width: 60px;\n  filter: drop-shadow(2px 7px 15px black);\n}\n.imagen {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.imagenpokeb {\n  width: 70px;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUtBO0VBQ0ksdUJBQUE7QUFGSjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUtBO0VBQ0ksdUJBQUE7QUFGSjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUtBO0VBQ0kseUJBQUE7QUFGSjtBQUdJO0VBQ0ksdUJBQUE7QUFEUjtBQUtBO0VBQ0ksNkJBQUE7QUFGSjtBQUdJO0VBQ0ksMkJBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksb0JBQUE7QUFGSjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksd0JBQUE7QUFGSjtBQUdJO0VBQ0ksc0JBQUE7QUFEUjtBQUtBO0VBQ0ksdUJBQUE7QUFGSjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksdUJBQUE7QUFGSjtBQUdJO0VBQ0kscUJBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksMEJBQUE7QUFGSjtBQUdJO0VBQ0ksd0JBQUE7QUFEUjtBQUtBO0VBQ0kscUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQU1BO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtBQUxKO0FBUUE7RUFDSSxXQUFBO0VBQ0EsdUNBQUE7QUFMSjtBQVVBO0VBRUcsa0JBQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtBQVJKO0FBWUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQVRKIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyamV0YXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5IDI0OSAyNDkgLyA1MiUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYigzMSAzOCAxMzUgLyAzNyUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0cHggKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2E4YTNhOGM7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi50YXJqZXRhLWFjZXJve1xyXG4gICAgYm9yZGVyLWNvbG9yOkxpZ2h0R3JleTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOiBMaWdodEdyZXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJqZXRhLXdhdGVye1xyXG4gICAgYm9yZGVyLWNvbG9yOlJveWFsQmx1ZTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOiBSb3lhbEJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJqZXRhLWJ1Z3tcclxuICAgIGJvcmRlci1jb2xvcjpZZWxsb3dHcmVlbjtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOiBZZWxsb3dHcmVlbjtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtZHJhZ29ue1xyXG4gICAgYm9yZGVyLWNvbG9yOk1lZGl1bVNsYXRlQmx1ZTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOiBNZWRpdW1TbGF0ZUJsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJqZXRhLWVsZWN0cmlje1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYigxNDEsIDE0MSwgMTIpO1xyXG4gICAgLm1pbmktdGFqe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxNDEsIDE0MSwgMTIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFyamV0YS1naG9zdHtcclxuICAgIGJvcmRlci1jb2xvcjpQdXJwbGU7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDogUHVycGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFyamV0YS1maXJle1xyXG4gICAgYm9yZGVyLWNvbG9yOkNyaW1zb247XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDogQ3JpbXNvbjtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtZmFpcnl7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDI1NSwgMTM2LCAyMzgpO1xyXG4gICAgLm1pbmktdGFqe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEzNiwgMjM4KTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtaWNle1xyXG4gICAgYm9yZGVyLWNvbG9yOkFxdWFNYXJpbmU7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDogQXF1YU1hcmluZTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtZmlnaHRpbmd7XHJcbiAgICBib3JkZXItY29sb3I6RmlyZWJyaWNrO1xyXG4gICAgLm1pbmktdGFqe1xyXG4gICAgICAgIGJhY2tncm91bmQ6IEZpcmVicmljaztcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtbm9ybWFse1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYigxMTYsIDExNiwgMTIxKTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigxMTYsIDExNiwgMTIxKTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtZ3Jhc3N7XHJcbiAgICBib3JkZXItY29sb3I6TGltZTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOkxpbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YXJqZXRhLXBzeWNoaWN7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDIxNCwgMjcsIDIxNCk7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjE0LCAyNywgMjE0KTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtcm9ja3tcclxuICAgIGJvcmRlci1jb2xvcjpQZXJ1O1xyXG4gICAgLm1pbmktdGFqe1xyXG4gICAgICAgIGJhY2tncm91bmQ6UGVydTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtc2luaXN0cm97XHJcbiAgICBib3JkZXItY29sb3I6U2xhdGVHcmF5O1xyXG4gICAgLm1pbmktdGFqe1xyXG4gICAgICAgIGJhY2tncm91bmQ6U2xhdGVHcmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFyamV0YS1ncm91bmR7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDEyNCwgMTA0LCA3OCk7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMTI0LCAxMDQsIDc4KTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtdmVuZW5ve1xyXG4gICAgYm9yZGVyLWNvbG9yOk1lZGl1bXB1cnBsZTtcclxuICAgIC5taW5pLXRhantcclxuICAgICAgICBiYWNrZ3JvdW5kOk1lZGl1bXB1cnBsZTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhcmpldGEtZGFya3tcclxuICAgIGJvcmRlci1jb2xvcjpyZ2IoMTcsIDE0LCAyNCk7XHJcbiAgICAubWluaS10YWp7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyZ2IoMTcsIDE0LCAyNCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5udW1lcm97XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG59XHJcblxyXG4ubm9tYnJle1xyXG4gICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5taW5pLXRhantcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmJiMTZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtOyAgICAgIFxyXG59XHJcblxyXG4uaG9sYXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggN3B4IDE1cHggYmxhY2spO1xyXG4gICAgXHJcbiAgICAgXHJcbn1cclxuXHJcbi5pbWFnZW57XHJcblxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4XHJcbiAgICAgXHJcbn1cclxuXHJcbi5pbWFnZW5wb2tlYntcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Pokemones', url: '/folder/pokemones', icon: 'list-outline' },
            { title: 'Tipos de pokemones', url: 'types', icon: 'accessibility-outline' },
            { title: 'Habilidades', url: 'ability', icon: 'barbell-outline' },
            { title: 'Favoritos', url: 'favorites', icon: 'heart-outline' },
        ];
        this.darkMode = true;
    }
    ngOnInit() {
        this.checkDarkTheme();
    }
    cambio() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
    checkDarkTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        console.log(prefersDark);
        if (prefersDark.matches) {
            document.body.classList.toggle('dark');
        }
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>\n            <div>\n              <img class=\"imagenpokeb\" src=\"../assets/580b57fcd9996e24bc43c31f.png\">\n            </div>\n            Pokedex Menu\n          </ion-list-header>\n          <ion-list>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <ion-label>Dark Theme</ion-label>\n          <ion-toggle slot=\"end\" \n          [ngModel]=\"darkMode\"\n          (ionChange)=\"cambio()\"></ion-toggle> \n            </ion-item>\n          </ion-list>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\"  [queryParams]=\"p.title == 'Favoritos'? {favorites: true} : {}\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon [name]=\"p.icon\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "WpTA":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tarjeta\" (click)=\"go(data.id)\"  [ngClass]=\"{ \n'tarjeta-fire': 'fire' == data.types[0].type.name,\n'tarjeta-water': 'water' == data.types[0].type.name,\n'tarjeta-normal': 'normal' == data.types[0].type.name,\n'tarjeta-bug': 'bug' == data.types[0].type.name,\n'tarjeta-electric': 'electric' == data.types[0].type.name,\n'tarjeta-ghost': 'ghost' == data.types[0].type.name,\n'tarjeta-dragon': 'dragon' == data.types[0].type.name,\n'tarjeta-fighting': 'fighting' == data.types[0].type.name,\n'tarjeta-grass': 'grass' == data.types[0].type.name,\n'tarjeta-fairy': 'fairy' == data.types[0].type.name,\n'tarjeta-veneno': 'poison' == data.types[0].type.name,\n'tarjeta-ground': 'ground' == data.types[0].type.name,\n'tarjeta-psychic': 'psychic' == data.types[0].type.name,\n'tarjeta-rock': 'rock' == data.types[0].type.name,\n'tarjeta-ice': 'ice' == data.types[0].type.name,\n'tarjeta-dark': 'dark' == data.types[0].type.name\n\n}\" >\n  \n  <div class=\"numero\"><strong>#00{{data.id}}</strong></div>\n  <div class=\"nombre\"><strong>{{data.name}}</strong></div>\n  <!-- <div class=\"mini-taj\">{{data.types[0].type.name}}</div> -->\n  <div *ngFor=\"let type of data.types;  \" class=\"mini-taj hola\">{{type.type.name}}</div>\n  <div class=\"imagen\"> <img class=\"imagenpokeb\" src=\"../../assets/580b57fcd9996e24bc43c31f.png\"></div>\n  <div class=\"imagen\"><img [src]=\"imgPokemon\">\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");









const Rutas = [
    {
        path: 'pokemon/: id',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"]
    },
    {
        path: 'favorites/: id',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"]
    },
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "WpTA");
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.scss */ "BhP2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





//poke.id nombre del ngif xD
let CardComponent = class CardComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.id = '';
        this.imgPokemon = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.imgPokemon = `https://pokeres.bastionbot.org/images/pokemon/${this.data.id}.png`;
    }
    addFovorite(id) {
        const getFavorites = localStorage.getItem('favorites');
        const arregloDePokeIdsConvertidoEnString = getFavorites + ',' + JSON.stringify({ id });
        localStorage.setItem('favorites', arregloDePokeIdsConvertidoEnString);
    }
    go(id) {
        this.router.navigate(['pokemon', id]);
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
CardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card',
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CardComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => Promise.all(/*! import() | folder-folder-module */[__webpack_require__.e("common"), __webpack_require__.e("folder-folder-module")]).then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule)
    },
    {
        path: 'types',
        loadChildren: () => __webpack_require__.e(/*! import() | types-types-module */ "types-types-module").then(__webpack_require__.bind(null, /*! ./types/types.module */ "FdDs")).then(m => m.TypesPageModule)
    },
    {
        path: 'ability',
        loadChildren: () => __webpack_require__.e(/*! import() | ability-ability-module */ "ability-ability-module").then(__webpack_require__.bind(null, /*! ./ability/ability.module */ "mL40")).then(m => m.AbilityPageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => Promise.all(/*! import() | favorites-favorites-module */[__webpack_require__.e("common"), __webpack_require__.e("favorites-favorites-module")]).then(__webpack_require__.bind(null, /*! ./favorites/favorites.module */ "uz0P")).then(m => m.FavoritesPageModule)
    },
    {
        path: 'pokemon/:id',
        loadChildren: () => Promise.all(/*! import() | pokemon-pokemon-module */[__webpack_require__.e("common"), __webpack_require__.e("pokemon-pokemon-module")]).then(__webpack_require__.bind(null, /*! ./pokemon/pokemon.module */ "JTxt")).then(m => m.PokemonPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-list-header {\n  color: white;\n  font-size: larger;\n  background: #3dc2ff;\n}\n\n.imagenpokeb {\n  width: 30px;\n  margin-right: 10px;\n  padding-top: 5px;\n}\n\nion-label {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLHNEQUFBO0FBRkY7O0FBS0E7RUFDRSwrQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQVBGOztBQVVBO0VBQ0UsaUNBQUE7QUFQRjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVdBO0VBQ0Usa0JBQUE7QUFSRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuXG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuXG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWxpc3QtaGVhZGVye1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBiYWNrZ3JvdW5kOiAgIzNkYzJmZjs7XG59XG5cbi5pbWFnZW5wb2tlYntcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgXG5cbn1cblxuaW9uLWxhYmVse1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map