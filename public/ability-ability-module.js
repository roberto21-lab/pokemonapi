(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ability-ability-module"],{

/***/ "MphA":
/*!*******************************************!*\
  !*** ./src/app/ability/ability.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  display: flex;\n  justify-content: center;\n  font-size: x-large;\n  margin-top: 10px;\n}\n\nimg {\n  height: 80% vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FiaWxpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFiaWxpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDgwJXZoO1xyXG4gICBcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy81ODBiNTdmY2Q5OTk2ZTI0YmM0M2MzMWYucG5nXCIpO1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "OJK1":
/*!***************************************************!*\
  !*** ./src/app/ability/ability-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AbilityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityPageRoutingModule", function() { return AbilityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ability_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ability.page */ "y0PA");




const routes = [
    {
        path: '',
        component: _ability_page__WEBPACK_IMPORTED_MODULE_3__["AbilityPage"]
    }
];
let AbilityPageRoutingModule = class AbilityPageRoutingModule {
};
AbilityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AbilityPageRoutingModule);



/***/ }),

/***/ "Uj7K":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ability/ability.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ability</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img class=\"imagenpokeb\" src=\"assets/580b57fcd9996e24bc43c31f.png\">\n<ion-list tappable  (click)=\"hability(ability)\"\n*ngFor=\"let ability of abilitys;\">\n<ion-item>{{ability.name}}</ion-item>\n</ion-list >\n</ion-content>\n");

/***/ }),

/***/ "mL40":
/*!*******************************************!*\
  !*** ./src/app/ability/ability.module.ts ***!
  \*******************************************/
/*! exports provided: AbilityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityPageModule", function() { return AbilityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ability_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ability-routing.module */ "OJK1");
/* harmony import */ var _ability_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ability.page */ "y0PA");







let AbilityPageModule = class AbilityPageModule {
};
AbilityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ability_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbilityPageRoutingModule"]
        ],
        declarations: [_ability_page__WEBPACK_IMPORTED_MODULE_6__["AbilityPage"]]
    })
], AbilityPageModule);



/***/ }),

/***/ "y0PA":
/*!*****************************************!*\
  !*** ./src/app/ability/ability.page.ts ***!
  \*****************************************/
/*! exports provided: AbilityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilityPage", function() { return AbilityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ability_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ability.page.html */ "Uj7K");
/* harmony import */ var _ability_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ability.page.scss */ "MphA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AbilityPage = class AbilityPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.getAbilityAsync();
    }
    getAbilityAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // https://pokeapi.co/api/v2/pokemon/1
                const resability = yield fetch(`https://pokeapi.co/api/v2/ability`);
                const ability = yield resability.json();
                this.abilitys = ability.results;
                console.log(this.abilitys);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    hability(ability) {
        this.router.navigate(['/folder/pokemones'], {
            queryParams: { hability: ability.name },
        });
    }
};
AbilityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AbilityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ability',
        template: _raw_loader_ability_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ability_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AbilityPage);



/***/ })

}]);
//# sourceMappingURL=ability-ability-module.js.map