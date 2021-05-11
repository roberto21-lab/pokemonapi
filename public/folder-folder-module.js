(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "FJ2Q":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "QRE9":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "wlos");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    },
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "s9za":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Pokedex</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let pokemon of pokemons\" size-xs=\"6\" size-sm=\"4\" size-lg=\"3\">\n        <app-card [data]=\"pokemon\"></app-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n<ion-infinite-scroll threshold=\"100px\"\n(IonInfiniteScroll)=\"loadData($event)\">\n<ion-infinite-scroll-content \nloadingSpinner=\"bubbles\"\nloadingText=\"loading...\"\n>\n\n</ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "wlos":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./folder.page.html */ "s9za");
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder.page.scss */ "FJ2Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let FolderPage = class FolderPage {
    constructor(router, activatedRoute, Platform) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.Platform = Platform;
        this.pokemons = [];
        this.type = '';
        this.i = 0;
        // this.Platform.ready().then(() => {
        //   this.i++;
        //   this.pokemons.push(this.i.toString());
        // });
    }
    // this.Platform.ready().then(()=> {
    //   for(let idPokemon = 1;idPokemon<20;idPokemon++ ){
    //  this.getNombreAsync(idPokemon);
    //   }
    //   if (tipo) {
    //     setTimeout(() => this.filterPokemon(tipo), 3000);
    //   }
    //   if (hability) {
    //     setTimeout(() => this.filterHability(hability), 3000);
    //   }
    // })
    ngOnInit() {
        let tipo = this.activatedRoute.snapshot.queryParams['tipo']; // aqui obtengo el valor del queryparams "tipo"
        let hability = this.activatedRoute.snapshot.queryParams['hability'];
        // let favorites = this.activatedRoute.snapshot.queryParams['favorites'];
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        for (let idPokemon = 1; idPokemon < 20; idPokemon++) {
            this.getNombreAsync(idPokemon); // fetch de pokemon por id (idPokemon)
        }
        if (tipo) {
            setTimeout(() => this.filterPokemon(tipo), 3000);
        }
        if (hability) {
            setTimeout(() => this.filterHability(hability), 3000);
        }
    }
    loadData(event) {
        setTimeout(() => {
            for (let interval = 0; interval < 20; interval++) {
                this.i++;
                this.pokemons.push(this.i.toString());
            }
            event.target.complete();
            if (this.pokemons.length == 500) {
                event.target.disable = true;
            }
        }, 3000);
    }
    // if(favorites){
    //   setTimeout(() => this.favoritePokemos(), 3000);
    // }
    // favoritePokemos() {
    //   const getFavorites: string = '[' + localStorage.getItem('favorites') +']';
    //   const favoriteDetails = [];
    //   for(const objectId of JSON.parse(getFavorites)) {
    //     if(objectId && objectId.id) {
    //       favoriteDetails.push(this.pokemons.filter(pokemon => pokemon.id == objectId?.id)[0])
    //     }
    //   }
    //   this.pokemons = favoriteDetails;
    // }
    filterPokemon(type) {
        const filterPokemon = this.pokemons.filter((pokemon) => pokemon.types[0].type.name == type);
        this.pokemons = filterPokemon;
    }
    filterHability(hability) {
        console.log(this.pokemons);
        const filterHability = this.pokemons.filter((pokemon) => pokemon.abilities[0].ability.name == hability);
        console.log(filterHability);
        this.pokemons = filterHability;
    }
    getNombreAsync(poke) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // https://pokeapi.co/api/v2/pokemon/1
                const resPokemon = yield fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
                const pokemon = yield resPokemon.json(); // obtengo la data del pokemon en formato Json
                this.pokemons.push(pokemon); // agrego al pokemon al arreglo de pokemones
                this.pokemons.sort(function (prev, next) {
                    return prev.id - next.id;
                    // ordeno el arreglo de pokemos por id de manera numerica.
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
FolderPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], null,] }]
};
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FolderPage);



/***/ }),

/***/ "yIOV":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "QRE9");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "wlos");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.module */ "g8K4");








let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"],
            _card_card_module__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module.js.map