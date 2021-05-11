(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites-favorites-module"],{

/***/ "XLvf":
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "xy1k");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "gR7b":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content [fullscreen]=\"true\">\n    <ion-grid>\n      <ion-row>\n        <ion-col  *ngFor=\"let favorito of brian\"  size-xs=\"6\" size-sm=\"4\" size-lg=\"3\" >\n            <app-card [data]=\"favorito\" ></app-card>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "uytc":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "uz0P":
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "XLvf");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "xy1k");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.module */ "g8K4");








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"],
            _card_card_module__WEBPACK_IMPORTED_MODULE_7__["CardModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "xy1k":
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favorites.page.html */ "gR7b");
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.page.scss */ "uytc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FavoritesPage = class FavoritesPage {
    constructor() {
        this.pokemons = [];
        this.brian = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.pokemons = [];
        const getFavoritos = localStorage.getItem('favoritos');
        console.log(getFavoritos);
        this.getFavoritesPokemons();
    }
    // id de pokemones listos para usar
    getFavoritesPokemons() {
        let getFavoritos = '[' + localStorage.getItem('favoritos') + ']';
        let pokemonsJson = JSON.parse(getFavoritos);
        this.favoritesPokemons = pokemonsJson;
        console.log(this.favoritesPokemons);
        this.favoritesPokemons.forEach((element) => {
            this.getPokemonApi(element);
        });
        //   const jara = [1,8,9,56,8];
        //   let total = 0
        //  jara.forEach(element =>{
        //   total = total + element
        //  })
        //  console.log(total)
    }
    // ionViewDidEnter(){
    //   console.log('hola')
    // }
    //  traer pokemones mediante un id valido (numeros) ejemplo numero 9 xd
    getPokemonApi(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // https://pokeapi.co/api/v2/pokemon/1
                const respoke = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                this.poke = yield respoke.json();
                this.brian.push(this.poke);
                this.brian.sort(function (prev, next) {
                    return prev.id - next.id;
                });
                console.log(this.brian);
            }
            catch (error) {
                console.log(error);
            }
            // for(const objectId of JSON.parse(getFavoritos)) {
            //   if(objectId && objectId.id) {
            //     this.favoritesPokemons.push(this.favoritesPokemons.filter(pokemon => pokemon.id == objectId?.id)[0])
            //   }
            // }
        });
    }
};
FavoritesPage.ctorParameters = () => [];
FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FavoritesPage);



/***/ })

}]);
//# sourceMappingURL=favorites-favorites-module.js.map