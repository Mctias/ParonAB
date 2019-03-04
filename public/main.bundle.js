webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); }); //(endpoint, object, headers).map(response as json)
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); }); //(endpoint, object, headers).map(response as json)
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    //Checks if our token is expired or not. Does everything behind the scenes
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = 'id_token';
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/auth.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WarehouseService = (function () {
    function WarehouseService(http) {
        this.http = http;
    }
    WarehouseService.prototype.createWarehouse = function (warehouse) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/warehouses/addWarehouse', JSON.stringify(warehouse), { headers: headers })
            .map(function (res) { return res.json(); }); //(endpoint, object, headers).map(response as json)
    };
    WarehouseService.prototype.updateWarehouse = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/warehouses/updateWarehouse', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); }); //(endpoint, object, headers).map(response as json)
    };
    WarehouseService.prototype.getWarehouse = function () {
        return this.http.get('http://localhost:3000/warehouses/warehouse').map(function (res) { return res.json(); });
    };
    WarehouseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WarehouseService);
    return WarehouseService;
    var _a;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/warehouse.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
    }
    DeliveryService.prototype.addDelivery = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/deliveries/addDelivery', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); }); //(endpoint, object, headers).map(response as json)
    };
    DeliveryService.prototype.getDeliveries = function () {
        return this.http.get('http://localhost:3000/deliveries/delivery').map(function (res) { return res.json(); });
    };
    DeliveryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], DeliveryService);
    return DeliveryService;
    var _a;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/delivery.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 397;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(516);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(693),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/app.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_deliveries_deliveries_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_warehouse_create_warehouse_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_warehouse_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_delivery_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_new_delivery_new_delivery_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__ = __webpack_require__(523);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'deliveries', component: __WEBPACK_IMPORTED_MODULE_10__components_deliveries_deliveries_component__["a" /* DeliveriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createWarehouse', component: __WEBPACK_IMPORTED_MODULE_11__components_create_warehouse_create_warehouse_component__["a" /* CreateWarehouseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'createDelivery', component: __WEBPACK_IMPORTED_MODULE_17__components_new_delivery_new_delivery_component__["a" /* NewDeliveryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_deliveries_deliveries_component__["a" /* DeliveriesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_create_warehouse_create_warehouse_component__["a" /* CreateWarehouseComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_new_delivery_new_delivery_component__["a" /* NewDeliveryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__services_warehouse_service__["a" /* WarehouseService */], __WEBPACK_IMPORTED_MODULE_15__services_delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWarehouseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateWarehouseComponent = (function () {
    function CreateWarehouseComponent(warehouseSevice, router) {
        this.warehouseSevice = warehouseSevice;
        this.router = router;
    }
    CreateWarehouseComponent.prototype.ngOnInit = function () {
    };
    //We create the warehose
    CreateWarehouseComponent.prototype.onCreateLager = function () {
        var _this = this;
        var warehouse = {
            name: this.name
        };
        this.warehouseSevice.createWarehouse(warehouse).subscribe(function (data) {
            if (data.success) {
                console.log('Warehouse added!');
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CreateWarehouseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-warehouse',
            template: __webpack_require__(694),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CreateWarehouseComponent);
    return CreateWarehouseComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/create-warehouse.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(warehouseService) {
        this.warehouseService = warehouseService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.warehouseService.getWarehouse().subscribe(function (data) {
            _this.warehouses = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(695),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_delivery_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeliveriesComponent = (function () {
    function DeliveriesComponent(deliveryService, router) {
        this.deliveryService = deliveryService;
        this.router = router;
    }
    //On init we get all the deliveries
    DeliveriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryService.getDeliveries().subscribe(function (delivery) {
            _this.deliveries = delivery;
        }, function (err) {
            console.log(err);
        });
    };
    //Check if the delivery has a positive or negative number of items
    DeliveriesComponent.prototype.isPositive = function (delivery) {
        if (delivery.noItems > 0)
            return true;
        return false;
    };
    //Creates a new delivery
    DeliveriesComponent.prototype.onCreateNewDelivery = function () {
        this.router.navigate(['/createDelivery']);
    };
    DeliveriesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deliveries',
            template: __webpack_require__(696),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_delivery_service__["a" /* DeliveryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DeliveriesComponent);
    return DeliveriesComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/deliveries.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(697),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/login.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(698),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delivery_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDeliveryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewDeliveryComponent = (function () {
    function NewDeliveryComponent(warehouseService, deliveryService, router) {
        this.warehouseService = warehouseService;
        this.deliveryService = deliveryService;
        this.router = router;
    }
    //On init get all the warehouses
    NewDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.warehouseService.getWarehouse().subscribe(function (warehouse) {
            _this.warehouses = warehouse;
        }, function (err) {
            console.log(err);
        });
    };
    //On add delivery create new delviery and update stocks
    NewDeliveryComponent.prototype.onAddDelivery = function () {
        var _this = this;
        var delivery = {
            name: this.warehouse,
            pName: this.pName,
            noItems: this.noItems,
            date: this.date.toString() //Parse date to string
        };
        console.log(this.warehouse);
        this.warehouseService.updateWarehouse(delivery).subscribe(function (data) {
            if (data.success) {
                _this.addDeliver(delivery);
                //Renavigate to dashboard
                _this.router.navigate(['/deliveries']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    //Function for adding the new deivery to deliveries
    NewDeliveryComponent.prototype.addDeliver = function (data) {
        this.deliveryService.addDelivery(data).subscribe(function (data) {
            if (data.success)
                console.log('Success!');
            else
                console.log(data.msg);
        });
    };
    NewDeliveryComponent.prototype.onCancel = function () {
        this.router.navigate(['/leveranser']);
    };
    NewDeliveryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-delivery',
            template: __webpack_require__(699),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_warehouse_service__["a" /* WarehouseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_delivery_service__["a" /* DeliveryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_delivery_service__["a" /* DeliveryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NewDeliveryComponent);
    return NewDeliveryComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/new-delivery.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(700),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/not-found.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        //console.log('lololol');
        var user = {
            name: this.name,
            email: this.email,
            password: this.password
        };
        console.log('ute');
        this.router.navigate(['/']);
        this.authService.registerUser(user).subscribe(function (data) {
            console.log('inne');
            if (data.success) {
                console.log('Registered user');
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(701),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/register.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/validate.service.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/matte/Documents/ParonAB/angular-src/src/environment.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-size: .875rem;\r\n}\r\n\r\n.feather {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; /* Behind the navbar */\r\n  padding: 48px 0 0; /* Height of navbar */\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*\r\n * Content\r\n */\r\n\r\n[role=\"main\"] {\r\n  padding-top: 133px; /* Space for fixed navbar */\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  [role=\"main\"] {\r\n    padding-top: 48px; /* Space for fixed navbar */\r\n  }\r\n}\r\n\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, .1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n.form-control-dark:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 100px;\r\n}\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n.form-signin input[type=\"Work ID\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 5rem;\r\n}\r\n.starter-template {\r\n  padding: 3rem 1.5rem;\r\n  text-align: center;\r\n}\r\n.navbar {\r\n    z-index: 9999;\r\n}"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "body {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-group{\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 5px;\r\n  margin: auto;\r\n  position: relative;\r\n  top: 25px;\r\n}\r\n\r\n#subButton{\r\n\tmargin-top: 2px;\r\n}"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = " <!-- Form for creating the lager with bound inputs -->\n<form (submit) = \"onCreateLager()\"> \n    <div class=\"form-group\">\n    \t<br> \n    \t<br>\n    \t<label>New warehouse name</label>\n    \t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"New warehouse name\">\n    \t<input type=\"submit\" class=\"btn btn-primary\" value =\"Submit\">\n  </div>\n</form>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<!-- Here we create the table for the stocks in the warehouses-->\n<br>\n<h1>Warehouse sock</h1>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Warehouse</th>\n      <th scope=\"col\">jPlatta</th>\n      <th scope=\"col\">jTelefon</th>\n      <th scope=\"col\">Päronklocka</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor =\"let warehouse of warehouses\">\n      <th scope=\"col\">{{warehouse.name}}</th>\n      <td>{{warehouse.products.jPlatta.noItems}}</td>\n      <td>{{warehouse.products.jTelefon.noItems}}</td>\n      <td>{{warehouse.products.Paronklocka.noItems}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h2>List</h2>\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Warehouse</th>\n      <th scope=\"col\">Product</th>\n      <th scope=\"col\">Number of items</th>\n      <th scope=\"col\">Date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor =\"let delivery of deliveries\">\n      <th scope=\"col\" *ngIf =\"isPositive(delivery)\" class = \"table-success\">{{delivery.lagerLokal}}</th>\n      <td *ngIf = isPositive(delivery) class = \"table-success\">{{delivery.product}}</td>\n      <td *ngIf = isPositive(delivery) class = \"table-success\">{{delivery.noItems}}</td>\n      <td *ngIf = isPositive(delivery) class = \"table-success\">{{delivery.date}}</td>\n      <th *ngIf = !isPositive(delivery) class = \"table-danger\">{{delivery.lagerLokal}}</th>\n      <td *ngIf = !isPositive(delivery) class = \"table-danger\">{{delivery.product}}</td>\n      <td *ngIf = !isPositive(delivery) class = \"table-danger\">{{delivery.noItems}}</td>\n      <td *ngIf = !isPositive(delivery) class = \"table-danger\">{{delivery.date}}</td>\n    </tr>\n    \n  </tbody>\n</table>\n<button class = \"btn-lg btn-success\" (click) = \"onCreateNewDelivery()\">Report new delivery</button>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onLoginSubmit()\" class=\"form-signin\">\n  <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\n\n  <label>Work id</label>\n\n  <input type=\"text\" class=\"form-control\" placeholder=\"Work ID\" required [(ngModel)]=\"name\" name=\"name\">\n\n  <label>Password</label>\n\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"password\" name=\"password\">\n  \n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" id=\"signBtn\">Sign in</button>\n\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2019</p>\n</form>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "  <!-- Bootstrap navbar that becomes collapse button when screen is small -->\r\n  <nav class=\"navbar navbar-default navbar-static-top navbar-expand-md navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/']\">Päron AB</a>\r\n    <a class=\"navbar-brand\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/dashboard']\">Päron AB</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Stock</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/deliveries']\">Deliveries</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/createWarehouse']\">Create warehouse</a>\r\n        </li>\r\n      </ul>\r\n      <ul class = \"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"authService.loggedIn()\">\r\n          <a href=\"#\" (click)=\"onLogout()\">Sign out</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Sign in</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<!-- Form for creating a new delivery -->\n<form (submit) = \"onAddDelivery()\">\n\t<label>Type of product</label>\n\t<br>\n\t<span>\n\t\t<!-- Choose one of the products -->\n\t\t<input type=\"radio\" name=\"productButton\" [(ngModel)]=\"pName\" value=\"jPlatta\" required> jPlatta\n\t\t<input type=\"radio\" name=\"productButton\" [(ngModel)]=\"pName\" value=\"jTelefon\" required> jTelefon\n    \t<input type=\"radio\" name=\"productButton\" [(ngModel)]=\"pName\" value=\"Paronklocka\" required> Päronklocka\n    </span>\n\t<br>\n\t<br>\n\t<label>Warehouse</label>\n\t<!-- Choose one of the warehouses -->\n\t<div class=\"form-group\">\n\t\t<select class = \"form-control\" id=\"selector1\" [(ngModel)]=\"warehouse\" name = \"warehouse\">\n\t\t\t<option *ngFor = \"let warehouseI of warehouses\" [value] = \"warehouseI.name\">{{warehouseI.name}}\n\t\t\t</option>\n\t\t</select>\n\t</div>\n\t<label>Number of items</label>\n\t<!-- Number of items -->\n    <input type=\"Number\" class=\"form-control\" [(ngModel)] = \"noItems\" name = \"noItems\" required>\n    <br>\n    <label>Date</label>\n    <!-- The date -->\n    <input type=\"date\" class=\"form-control\" [(ngModel)] = \"date\" name = \"date\" required>\n    <br>\n  \t<input type=\"submit\" class=\"btn btn-primary\" value =\"Submit\">\n\t<button class=\"btn btn-danger\" (click) = \"onCancel()\">Cancel</button>  \t\n</form>\n\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<h1>Error: Site not found :(</h1>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Work ID</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"WorkdIDInput\" placeholder=\"Work ID\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\n  \t<input type=\"submit\" value= \"Submit\">\n  </div>\n</form>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ })

},[739]);
//# sourceMappingURL=main.bundle.map