(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["types-types-module"],{

/***/ "FdDs":
/*!***************************************!*\
  !*** ./src/app/types/types.module.ts ***!
  \***************************************/
/*! exports provided: TypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesPageModule", function() { return TypesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _types_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types-routing.module */ "cEdh");
/* harmony import */ var _types_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types.page */ "jVd6");







let TypesPageModule = class TypesPageModule {
};
TypesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _types_routing_module__WEBPACK_IMPORTED_MODULE_5__["TypesPageRoutingModule"],
        ],
        declarations: [_types_page__WEBPACK_IMPORTED_MODULE_6__["TypesPage"]]
    })
], TypesPageModule);



/***/ }),

/***/ "cEdh":
/*!***********************************************!*\
  !*** ./src/app/types/types-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TypesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesPageRoutingModule", function() { return TypesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.page */ "jVd6");




const routes = [
    {
        path: '',
        component: _types_page__WEBPACK_IMPORTED_MODULE_3__["TypesPage"]
    }
];
let TypesPageRoutingModule = class TypesPageRoutingModule {
};
TypesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TypesPageRoutingModule);



/***/ }),

/***/ "hQ0/":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/types/types.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>tipos de pokemon</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-button (click)=\"type(tipo)\"\n*ngFor=\"let tipo of tipos;\" \nclass=\"mini-taj hola\"\n[ngClass]=\"{ \n  'btn-fire': 'fire' == tipo.name,\n  'btn-water': 'water' == tipo.name,\n  'btn-normal': 'normal' == tipo.name,\n  'btn-bug': 'bug' == tipo.name,\n  'btn-electric': 'electric' == tipo.name,\n  'btn-ghost': 'ghost' == tipo.name,\n  'btn-dragon': 'dragon' == tipo.name,\n  'btn-fighting': 'fighting' == tipo.name,\n  'btn-grass': 'grass' == tipo.name,\n  'btn-fairy': 'fairy' == tipo.name,\n  'btn-veneno': 'poison' == tipo.name,\n  'btn-ground': 'ground' == tipo.name,\n  'btn-psychic': 'psychic' == tipo.name,\n  'btn-rock': 'rock' == tipo.name,\n  'btn-ice': 'ice' == tipo.name,\n  'btn-dark': 'dark' == tipo.name}\">{{tipo.name}}</ion-button>\n\n  <app-card></app-card>\n\n</ion-content>\n");

/***/ }),

/***/ "jVd6":
/*!*************************************!*\
  !*** ./src/app/types/types.page.ts ***!
  \*************************************/
/*! exports provided: TypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesPage", function() { return TypesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_types_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./types.page.html */ "hQ0/");
/* harmony import */ var _types_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.page.scss */ "vQBW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let TypesPage = class TypesPage {
    constructor(router) {
        this.router = router;
        this.tipos = [];
    }
    ngOnInit() {
        this.getHolaAsync();
    }
    getHolaAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // https://pokeapi.co/api/v2/pokemon/1
                const restipo = yield fetch(`https://pokeapi.co/api/v2/type`);
                const tipo = yield restipo.json();
                this.tipos = tipo.results;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    type(tipos) {
        this.router.navigate(['/folder/pokemones'], {
            queryParams: { tipo: tipos.name },
        });
    }
};
TypesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TypesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-types',
        template: _raw_loader_types_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_types_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TypesPage);



/***/ }),

/***/ "vQBW":
/*!***************************************!*\
  !*** ./src/app/types/types.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  margin-top: 10px;\n  width: 30%;\n  display: flex;\n  margin-left: 20px;\n}\n\n.btn-acero {\n  --background: LightGrey;\n}\n\n.btn-water {\n  --background: RoyalBlue;\n}\n\n.btn-bug {\n  --background: YellowGreen;\n}\n\n.btn-dragon {\n  --background: MediumSlateBlue;\n}\n\n.btn-electric {\n  --background: rgb(141, 141, 12);\n}\n\n.btn-ghost {\n  --background: Purple;\n}\n\n.btn-fire {\n  --background: Crimson;\n}\n\n.btn-fairy {\n  --background: rgb(255, 136, 238);\n}\n\n.btn-ice {\n  --background: AquaMarine;\n}\n\n.btn-fighting {\n  --background: Firebrick;\n}\n\n.btn-normal {\n  --background:rgb(116, 116, 121);\n}\n\n.btn-grass {\n  --background:Lime;\n}\n\n.btn-psychic {\n  --background:rgb(214, 27, 214);\n}\n\n.btn-rock {\n  --background:Peru;\n}\n\n.btn-sinistro {\n  --background:SlateGray;\n}\n\n.btn-ground {\n  --background:rgb(124, 104, 78);\n}\n\n.btn-veneno {\n  --background:Mediumpurple;\n}\n\n.btn-dark {\n  --background:rgb(17, 14, 24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3R5cGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUFKOztBQVFBO0VBQ0csdUJBQUE7QUFMSDs7QUFRQTtFQUNFLHVCQUFBO0FBTEY7O0FBUUE7RUFDRyx5QkFBQTtBQUxIOztBQVFBO0VBQ0ksNkJBQUE7QUFMSjs7QUFPQTtFQUNJLCtCQUFBO0FBSko7O0FBT0E7RUFDSSxvQkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7QUFKSjs7QUFPQTtFQUNJLGdDQUFBO0FBSko7O0FBT0E7RUFDSSx3QkFBQTtBQUpKOztBQU9BO0VBQ0ksdUJBQUE7QUFKSjs7QUFPQTtFQUNJLCtCQUFBO0FBSko7O0FBT0E7RUFDSSxpQkFBQTtBQUpKOztBQU9BO0VBQ0ksOEJBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0FBSko7O0FBT0E7RUFDSSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksOEJBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBT0E7RUFDSSw0QkFBQTtBQUpKIiwiZmlsZSI6InR5cGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4uYnRuLWFjZXJve1xyXG4gICAtLWJhY2tncm91bmQ6IExpZ2h0R3JleTtcclxufVxyXG5cclxuLmJ0bi13YXRlcntcclxuICAtLWJhY2tncm91bmQ6IFJveWFsQmx1ZTtcclxufVxyXG5cclxuLmJ0bi1idWd7XHJcbiAgIC0tYmFja2dyb3VuZDogWWVsbG93R3JlZW47XHJcbn1cclxuXHJcbi5idG4tZHJhZ29ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBNZWRpdW1TbGF0ZUJsdWU7IFxyXG59XHJcbi5idG4tZWxlY3RyaWN7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNDEsIDE0MSwgMTIpO1xyXG59XHJcblxyXG4uYnRuLWdob3N0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBQdXJwbGU7XHJcbn1cclxuXHJcbi5idG4tZmlyZXtcclxuICAgIC0tYmFja2dyb3VuZDogQ3JpbXNvbjtcclxufVxyXG5cclxuLmJ0bi1mYWlyeXtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMTM2LCAyMzgpO1xyXG59XHJcblxyXG4uYnRuLWljZXtcclxuICAgIC0tYmFja2dyb3VuZDogQXF1YU1hcmluZTtcclxufVxyXG5cclxuLmJ0bi1maWdodGluZ3tcclxuICAgIC0tYmFja2dyb3VuZDogRmlyZWJyaWNrO1xyXG59XHJcblxyXG4uYnRuLW5vcm1hbHtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMTE2LCAxMTYsIDEyMSk7XHJcbn1cclxuXHJcbi5idG4tZ3Jhc3N7XHJcbiAgICAtLWJhY2tncm91bmQ6TGltZTtcclxufVxyXG5cclxuLmJ0bi1wc3ljaGlje1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyMTQsIDI3LCAyMTQpO1xyXG59XHJcblxyXG4uYnRuLXJvY2t7XHJcbiAgICAtLWJhY2tncm91bmQ6UGVydTtcclxufVxyXG5cclxuLmJ0bi1zaW5pc3Ryb3tcclxuICAgIC0tYmFja2dyb3VuZDpTbGF0ZUdyYXk7XHJcbn1cclxuXHJcbi5idG4tZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigxMjQsIDEwNCwgNzgpO1xyXG59XHJcblxyXG4uYnRuLXZlbmVub3tcclxuICAgIC0tYmFja2dyb3VuZDpNZWRpdW1wdXJwbGU7XHJcbn1cclxuXHJcbi5idG4tZGFya3tcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMTcsIDE0LCAyNCk7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=types-types-module.js.map