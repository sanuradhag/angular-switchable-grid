webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header-panel></header-panel>\n<router-outlet></router-outlet>\n<footer-panel></footer-panel>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "/*!\n\n =========================================================\n * Angular Switchable Grid 2 - Version 1.0.7\n =========================================================\n\n * Demo Page: https://sanuradhag.github.io/angular-switchable-grid/\n * GitHub Repo: https://github.com/sanuradhag/angular-switchable-grid\n * Link to npm: https://www.npmjs.com/package/angular-switchable-grid\n\n =========================================================\n\n * Licensed under MIT\n\n */\n/* GOOGLE MATERIAL DESIGN colors pack */\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n\n.flaticon-gear:before {\n  content: \"\\F100\"; }\n\n.flaticon-github-logo:before {\n  content: \"\\F101\"; }\n\n.flaticon-filter-1:before {\n  content: \"\\F102\"; }\n\n.flaticon-filter:before {\n  content: \"\\F103\"; }\n\n.flaticon-black:before {\n  content: \"\\F104\"; }\n\n.flaticon-arrows-10:before {\n  content: \"\\F105\"; }\n\n.flaticon-expand-button:before {\n  content: \"\\F106\"; }\n\n.flaticon-drop-down-arrow:before {\n  content: \"\\F107\"; }\n\n.flaticon-go-back-left-arrow:before {\n  content: \"\\F108\"; }\n\n.flaticon-arrows-9:before {\n  content: \"\\F109\"; }\n\n.flaticon-arrows-7:before {\n  content: \"\\F10A\"; }\n\n.flaticon-arrows-8:before {\n  content: \"\\F10B\"; }\n\n.flaticon-interface-2:before {\n  content: \"\\F10C\"; }\n\n.flaticon-load:before {\n  content: \"\\F10D\"; }\n\n.flaticon-arrows-6:before {\n  content: \"\\F10E\"; }\n\n.flaticon-arrows-5:before {\n  content: \"\\F10F\"; }\n\n.flaticon-arrows-4:before {\n  content: \"\\F110\"; }\n\n.flaticon-web:before {\n  content: \"\\F111\"; }\n\n.flaticon-left-arrow-key:before {\n  content: \"\\F112\"; }\n\n.flaticon-add-plus-button:before {\n  content: \"\\F113\"; }\n\n.flaticon-mark-as-favorite-star:before {\n  content: \"\\F114\"; }\n\n.flaticon-searching-magnifying-glass:before {\n  content: \"\\F115\"; }\n\n.flaticon-close-button:before {\n  content: \"\\F116\"; }\n\n.flaticon-check-symbol:before {\n  content: \"\\F117\"; }\n\n.flaticon-back-arrow:before {\n  content: \"\\F118\"; }\n\n.flaticon-keyboard-right-arrow-button:before {\n  content: \"\\F119\"; }\n\n.flaticon-arrows-3:before {\n  content: \"\\F11A\"; }\n\n.flaticon-upload:before {\n  content: \"\\F11B\"; }\n\n.flaticon-long-arrow-pointing-up:before {\n  content: \"\\F11C\"; }\n\n.flaticon-arrows-2:before {\n  content: \"\\F11D\"; }\n\n.flaticon-arrows-1:before {\n  content: \"\\F11E\"; }\n\n.flaticon-arrows:before {\n  content: \"\\F11F\"; }\n\n.flaticon-app:before {\n  content: \"\\F120\"; }\n\n.flaticon-interface-1:before {\n  content: \"\\F121\"; }\n\n.flaticon-squares:before {\n  content: \"\\F122\"; }\n\n.flaticon-interface:before {\n  content: \"\\F123\"; }\n\n/** Material design flat button styles **/\n.md-btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all .15s ease-in-out;\n  -o-transition: all .15s ease-in-out;\n  -moz-transition: all .15s ease-in-out;\n  -webkit-transition: all .15s ease-in-out; }\n  .md-btn:focus, .md-btn:active, .md-btn.active, .md-btn:active:focus, .md-btn.active:focus {\n    outline: 0;\n    outline-offset: 0;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none; }\n\n.btn-flat-default {\n  background-color: transparent;\n  border: 1px solid #212121; }\n  .btn-flat-default:hover, .btn-flat-default:active {\n    background-color: #d4d3d3; }\n  .btn-flat-default:disabled, .btn-flat-default.disabled, .btn-flat-default[disabled] {\n    background-color: #e0e0e0; }\n  .btn-flat-default .ink {\n    background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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

var packageDetails = __webpack_require__("../../../../../src/app/grid/package.json");
var AppComponent = (function () {
    function AppComponent() {
        this.version = packageDetails.version;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_md2__ = __webpack_require__("../../../../md2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch_src__ = __webpack_require__("../../../../ngx-ui-switch/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_module__ = __webpack_require__("../../../../../src/app/grid/grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__example_style_guide_style_guide_component__ = __webpack_require__("../../../../../src/app/example/style-guide/style-guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__example_get_started_get_started_component__ = __webpack_require__("../../../../../src/app/example/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__example_example_component__ = __webpack_require__("../../../../../src/app/example/example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_header_panel_header_panel_component__ = __webpack_require__("../../../../../src/app/shared/header-panel/header-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_footer_panel_footer_panel_component__ = __webpack_require__("../../../../../src/app/shared/footer-panel/footer-panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__example_get_started_get_started_component__["a" /* GetStartedComponent */],
            __WEBPACK_IMPORTED_MODULE_9__example_style_guide_style_guide_component__["a" /* StyleGuideComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_header_panel_header_panel_component__["a" /* HeaderPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_footer_panel_footer_panel_component__["a" /* FooterPanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_md2__["a" /* Md2Module */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_8__grid_grid_module__["a" /* GridModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutes */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_example_component__ = __webpack_require__("../../../../../src/app/example/example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__example_get_started_get_started_component__ = __webpack_require__("../../../../../src/app/example/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__example_style_guide_style_guide_component__ = __webpack_require__("../../../../../src/app/example/style-guide/style-guide.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: 'example', component: __WEBPACK_IMPORTED_MODULE_2__example_example_component__["a" /* ExampleComponent */] },
    { path: 'get-started', component: __WEBPACK_IMPORTED_MODULE_3__example_get_started_get_started_component__["a" /* GetStartedComponent */] },
    { path: 'style-guide', component: __WEBPACK_IMPORTED_MODULE_4__example_style_guide_style_guide_component__["a" /* StyleGuideComponent */] },
    { path: '', redirectTo: '/example', pathMatch: 'full' },
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    return AppRoutes;
}());
AppRoutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutes);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/example/example.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header Panel -->\n<div class=\"header-panel\">\n  <div class=\"grid-control-group pull-right\">\n    <div class=\"filter\">\n      <filter class=\"form-control\" [placeholder]=\"placeholder\" [resetFilterTerm]=\"resetFilterTerm\"\n              (getFilterTerm)=\"getFilterTerm($event)\"></filter>\n    </div>\n\n    <div class=\"filter-type\">\n      <div md2-menu>\n        <button class=\"md-btn btn-flat-default\" md2-menu-trigger [tooltip]=\"'Change the filter category'\">Filter\n          by<span\n            class=\"caret\"></span></button>\n        <div md2-menu-content x-position=\"before\" class=\"menu-content\">\n          <ng-container *ngFor=\"let item of dataObject\">\n            <a md2-menu-item (click)=\"setFilterBy(item)\">{{item.displayName}}</a>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"grid-options\">\n      <div md2-menu>\n        <button class=\"md-btn btn-flat-default\" md2-menu-trigger [tooltip]=\"'Grid options'\"><i\n          class=\"flaticon-gear\"></i></button>\n        <div md2-menu-content x-position=\"before\" class=\"menu-content\">\n          <a md2-menu-item>\n            <span class=\"list-item-desc\">Change the grid view</span>\n            <ui-switch class=\"list-item-toggle\" size=\"small\" [(ngModel)]=\"isGridView\"></ui-switch>\n          </a>\n\n          <a md2-menu-item>\n              <span class=\"list-item-desc\">Enable/Disable selection</span>\n              <ui-switch class=\"list-item-toggle\" size=\"small\" [(ngModel)]=\"enableSelection\"></ui-switch>\n          </a>\n\n          <a md2-menu-item>\n            <span class=\"list-item-desc\">Enable/Disable multi select</span>\n            <ui-switch class=\"list-item-toggle\" size=\"small\" [(ngModel)]=\"enableMultiSelect\"></ui-switch>\n          </a>\n\n          <a md2-menu-item>\n            <span class=\"list-item-desc\">Enable/Disable sorting</span>\n            <ui-switch class=\"list-item-toggle\" size=\"small\" [(ngModel)]=\"enableSort\"></ui-switch>\n          </a>\n\n          <a md2-menu-item>\n            <span class=\"list-item-desc\">Show no data template</span>\n            <ui-switch class=\"list-item-toggle\" size=\"small\" (change)=\"onTemplateChange($event)\"></ui-switch>\n          </a>\n\n        </div>\n      </div>\n    </div>\n\n    <button class=\"md-btn btn-flat-default\" (click)=\"selectAll()\" [tooltip]=\"'Select all'\">Select all</button>\n    <button class=\"md-btn btn-flat-default\" (click)=\"deselectAll()\" [tooltip]=\"'Deselect all'\">Deselect all</button>\n    <button class=\"md-btn btn-flat-default\" (click)=\"grid.exportAsExcelFile()\" [tooltip]=\"'Export as excel file'\">Export as excel file</button>\n  </div>\n</div>\n\n<!-- Grid -->\n<angular-switchable-grid #grid\n  [data]=\"data\"\n  [columnTitles]=\"columnTitles\"\n  [isGridView]=\"isGridView\"\n  [filterTerm]=\"filterTerm\"\n  [filterBy]=\"filterBy\"\n  [enableMultiSelect]=\"enableMultiSelect\"\n  [enableSelection]=\"enableSelection\"\n  [enableSort]=\"enableSort\"\n  [noDataTemplate]=\"noDataTemplate\"\n  (getSelectedItems)=\"getSelectedItems($event)\"\n>\n\n  <ng-template let-item>\n    <div class=\"hidden-table avatar\"><img class=\"hidden-table blue\" src=\"{{item.avatar}}\"></div>\n    <div class=\"hidden-grid name\">{{item.id}}</div>\n    <div class=\"show-table inline bold\">{{item.first_name}}</div>\n    <div class=\"show-table inline bold\">{{item.last_name}}</div>\n    <div class=\"show-table\">{{item.email}}</div>\n    <div class=\"hidden-grid show-table\">{{item.gender}}</div>\n    <div class=\"show-table\">{{item.ip_address}}</div>\n  </ng-template>\n\n</angular-switchable-grid>\n\n<ng-template #noDataTemplate>\n  <div class=\"no-data\">\n    <h1>Whoops!</h1>\n    <h2>No data to display. Added data will appear here.</h2>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/example/example.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "/*!\n\n =========================================================\n * Angular Switchable Grid 2 - Version 1.0.7\n =========================================================\n\n * Demo Page: https://sanuradhag.github.io/angular-switchable-grid/\n * GitHub Repo: https://github.com/sanuradhag/angular-switchable-grid\n * Link to npm: https://www.npmjs.com/package/angular-switchable-grid\n\n =========================================================\n\n * Licensed under MIT\n\n */\n/* GOOGLE MATERIAL DESIGN colors pack */\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n\n.flaticon-gear:before {\n  content: \"\\F100\"; }\n\n.flaticon-github-logo:before {\n  content: \"\\F101\"; }\n\n.flaticon-filter-1:before {\n  content: \"\\F102\"; }\n\n.flaticon-filter:before {\n  content: \"\\F103\"; }\n\n.flaticon-black:before {\n  content: \"\\F104\"; }\n\n.flaticon-arrows-10:before {\n  content: \"\\F105\"; }\n\n.flaticon-expand-button:before {\n  content: \"\\F106\"; }\n\n.flaticon-drop-down-arrow:before {\n  content: \"\\F107\"; }\n\n.flaticon-go-back-left-arrow:before {\n  content: \"\\F108\"; }\n\n.flaticon-arrows-9:before {\n  content: \"\\F109\"; }\n\n.flaticon-arrows-7:before {\n  content: \"\\F10A\"; }\n\n.flaticon-arrows-8:before {\n  content: \"\\F10B\"; }\n\n.flaticon-interface-2:before {\n  content: \"\\F10C\"; }\n\n.flaticon-load:before {\n  content: \"\\F10D\"; }\n\n.flaticon-arrows-6:before {\n  content: \"\\F10E\"; }\n\n.flaticon-arrows-5:before {\n  content: \"\\F10F\"; }\n\n.flaticon-arrows-4:before {\n  content: \"\\F110\"; }\n\n.flaticon-web:before {\n  content: \"\\F111\"; }\n\n.flaticon-left-arrow-key:before {\n  content: \"\\F112\"; }\n\n.flaticon-add-plus-button:before {\n  content: \"\\F113\"; }\n\n.flaticon-mark-as-favorite-star:before {\n  content: \"\\F114\"; }\n\n.flaticon-searching-magnifying-glass:before {\n  content: \"\\F115\"; }\n\n.flaticon-close-button:before {\n  content: \"\\F116\"; }\n\n.flaticon-check-symbol:before {\n  content: \"\\F117\"; }\n\n.flaticon-back-arrow:before {\n  content: \"\\F118\"; }\n\n.flaticon-keyboard-right-arrow-button:before {\n  content: \"\\F119\"; }\n\n.flaticon-arrows-3:before {\n  content: \"\\F11A\"; }\n\n.flaticon-upload:before {\n  content: \"\\F11B\"; }\n\n.flaticon-long-arrow-pointing-up:before {\n  content: \"\\F11C\"; }\n\n.flaticon-arrows-2:before {\n  content: \"\\F11D\"; }\n\n.flaticon-arrows-1:before {\n  content: \"\\F11E\"; }\n\n.flaticon-arrows:before {\n  content: \"\\F11F\"; }\n\n.flaticon-app:before {\n  content: \"\\F120\"; }\n\n.flaticon-interface-1:before {\n  content: \"\\F121\"; }\n\n.flaticon-squares:before {\n  content: \"\\F122\"; }\n\n.flaticon-interface:before {\n  content: \"\\F123\"; }\n\n/** Material design flat button styles **/\n.md-btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all .15s ease-in-out;\n  -o-transition: all .15s ease-in-out;\n  -moz-transition: all .15s ease-in-out;\n  -webkit-transition: all .15s ease-in-out; }\n  .md-btn:focus, .md-btn:active, .md-btn.active, .md-btn:active:focus, .md-btn.active:focus {\n    outline: 0;\n    outline-offset: 0;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none; }\n\n.btn-flat-default {\n  background-color: transparent;\n  border: 1px solid #212121; }\n  .btn-flat-default:hover, .btn-flat-default:active {\n    background-color: #d4d3d3; }\n  .btn-flat-default:disabled, .btn-flat-default.disabled, .btn-flat-default[disabled] {\n    background-color: #e0e0e0; }\n  .btn-flat-default .ink {\n    background-color: white; }\n\n.header-panel {\n  height: 50px;\n  width: 100%;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  padding: 8px 15px; }\n  .header-panel .grid-control-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    font-family: 'Roboto', sans-serif;\n    font-size: 14px; }\n    .header-panel .grid-control-group button {\n      margin: 0 5px;\n      height: 34px;\n      height: 34px;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .header-panel .grid-control-group .view-switcher {\n      padding: 0 5px; }\n      .header-panel .grid-control-group .view-switcher button {\n        height: 34px; }\n    .header-panel .grid-control-group .filter-type button {\n      padding-left: 15px;\n      padding-right: 15px; }\n    .header-panel .grid-control-group .filter-type .menu-content {\n      top: 35px;\n      right: 7px; }\n      .header-panel .grid-control-group .filter-type .menu-content a {\n        color: #616161;\n        font-size: 14px; }\n    .header-panel .grid-control-group .grid-options i:before {\n      font-size: 14px; }\n    .header-panel .grid-control-group .grid-options .list-item-desc {\n      width: 80%;\n      margin-right: 15px; }\n    .header-panel .grid-control-group .grid-options button {\n      padding-left: 15px;\n      padding-right: 15px; }\n    .header-panel .grid-control-group .grid-options .menu-content {\n      top: 35px;\n      right: 7px; }\n      .header-panel .grid-control-group .grid-options .menu-content a {\n        color: #616161;\n        font-size: 14px; }\n    .header-panel .grid-control-group .filter {\n      padding: 0 5px; }\n\n/** GRID STYLES **/\n:host /deep/ .grid-list {\n  height: calc(100vh - 180px);\n  overflow: hidden; }\n  :host /deep/ .grid-list .table-row-wrapper {\n    height: calc(100vh - 243px);\n    overflow: auto; }\n\n:host /deep/ .form-control input {\n  outline: none;\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example/example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__ = __webpack_require__("../../../../../src/app/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../src/app/mock-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExampleComponent = (function () {
    function ExampleComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* users */];
        this.dataObject = [
            { name: 'id', displayName: 'ID' },
            { name: 'first_name', displayName: 'First name' },
            { name: 'last_name', displayName: 'Last name' },
            { name: 'email', displayName: 'Email' },
            { name: 'gender', displayName: 'Gender' },
            { name: 'ip_address', displayName: 'IP address' }
        ];
        this.columnTitles = ['ID', 'First name', 'Last name', 'Email', 'Gender', 'IP address'];
        this.filterTerm = '';
        this.placeholder = this.columnTitles[0];
        this.filterBy = this.dataObject[0].name;
        this.resetFilterTerm = false;
        this.isGridView = true;
        this.enableSelection = true;
        this.enableSelection = true;
        this.enableMultiSelect = true;
        this.enableSort = true;
    }
    /**
     * Get filter term from the filter component.
     * @param filterTerm
     */
    ExampleComponent.prototype.getFilterTerm = function (filterTerm) {
        this.filterTerm = filterTerm;
        this.resetFilterTerm = false;
    };
    /**
     * Get selected data from the grid.
     * @param data - data from the grid.
     */
    ExampleComponent.prototype.getSelectedItems = function (data) {
        console.log(data);
    };
    /**
     * Set filter by category.
     * @param item - data item.
     */
    ExampleComponent.prototype.setFilterBy = function (item) {
        this.filterBy = item.name;
        this.placeholder = item.displayName;
    };
    /**
     * Event jandle for template change.
     * @param data - event payload.
     */
    ExampleComponent.prototype.onTemplateChange = function (data) {
        data ? this.data = [] : this.data = __WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* users */];
    };
    /**
     * Select all items from the grid.
     */
    ExampleComponent.prototype.selectAll = function () {
        this.grid.selectAll();
    };
    /**
     * Deselect all items from the grid.
     */
    ExampleComponent.prototype.deselectAll = function () {
        this.grid.deselectAll();
    };
    return ExampleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridComponent */]) === "function" && _a || Object)
], ExampleComponent.prototype, "grid", void 0);
ExampleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-example',
        template: __webpack_require__("../../../../../src/app/example/example.component.html"),
        styles: [__webpack_require__("../../../../../src/app/example/example.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExampleComponent);

var _a;
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/example.component.js.map

/***/ }),

/***/ "../../../../../src/app/example/get-started/get-started.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Get started</h1>\n\n  <div>\n    <h2>Installation</h2>\n\n    Install through npm. <br>\n    <code>npm install --save angular-switchable-grid</code> <br>\n\n    Then import <strong>GridModule</strong> and include it in your apps for module. <br>\n\n\n    Then add <strong>angular-switchable-grid</strong> to your app template.\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/example/get-started/get-started.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example/get-started/get-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import 'codemirror/mode/go/go'
var GetStartedComponent = (function () {
    function GetStartedComponent() {
        this.config = { lineNumbers: true, mode: 'text/x-go' };
        this.content = "// ... some code !\npackage main\n\nimport \"fmt\"\n\n// Send the sequence 2, 3, 4, ... to channel 'ch'.\nfunc generate(ch chan<- int) {\n\tfor i := 2; ; i++ {\n\t\tch <- i  // Send 'i' to channel 'ch'\n\t}\n}";
    }
    return GetStartedComponent;
}());
GetStartedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'get-started',
        template: __webpack_require__("../../../../../src/app/example/get-started/get-started.component.html"),
        styles: [__webpack_require__("../../../../../src/app/example/get-started/get-started.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GetStartedComponent);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/get-started.component.js.map

/***/ }),

/***/ "../../../../../src/app/example/style-guide/style-guide.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div [froalaEditor]>Hello, Froala!</div>-->\nStyle guide\n"

/***/ }),

/***/ "../../../../../src/app/example/style-guide/style-guide.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/example/style-guide/style-guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleGuideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyleGuideComponent = (function () {
    function StyleGuideComponent() {
    }
    return StyleGuideComponent;
}());
StyleGuideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'style-guide',
        template: __webpack_require__("../../../../../src/app/example/style-guide/style-guide.component.html"),
        styles: [__webpack_require__("../../../../../src/app/example/style-guide/style-guide.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StyleGuideComponent);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/style-guide.component.js.map

/***/ }),

/***/ "../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Flaticon.073b53bdeb8b4b21c98e.eot";

/***/ }),

/***/ "../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Flaticon.3ebeaf88305559bce3b8.svg";

/***/ }),

/***/ "../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.ttf":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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ADAAMAAwACAAAFZlcnNpb24gMDAxLjAwMCAAAEYAbABhAHQAaQBjAG8AbgAARmxhdGljb24AAAAAAgAAAAAAAP/AABkAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAQACAAMBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUHdW5pRjEwMAd1bmlGMTAxB3VuaUYxMDIHdW5pRjEwMwd1bmlGMTA0B3VuaUYxMDUHdW5pRjEwNgd1bmlGMTA3B3VuaUYxMDgHdW5pRjEwOQd1bmlGMTBBB3VuaUYxMEIHdW5pRjEwQwd1bmlGMTBEB3VuaUYxMEUHdW5pRjEwRgd1bmlGMTEwB3VuaUYxMTEHdW5pRjExMgd1bmlGMTEzB3VuaUYxMTQHdW5pRjExNQd1bmlGMTE2B3VuaUYxMTcHdW5pRjExOAd1bmlGMTE5B3VuaUYxMUEHdW5pRjExQgd1bmlGMTFDB3VuaUYxMUQHdW5pRjExRQd1bmlGMTFGB3VuaUYxMjAHdW5pRjEyMQd1bmlGMTIyB3VuaUYxMjMAAAAAAAH//wACAAAAAQAAAADTKQchAAAAANX2bQEAAAAA1fZtAQ=="

/***/ }),

/***/ "../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.woff":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAx4AA0AAAAAE4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAMXAAAABoAAAAcfxXhJE9TLzIAAAGgAAAASQAAAGBP+l08Y21hcAAAAiwAAABKAAABSuIXFf9jdnQgAAACeAAAAAQAAAAEABEBRGdhc3AAAAxUAAAACAAAAAj//wADZ2x5ZgAAAtAAAAe7AAAMCNVgc/RoZWFkAAABMAAAADAAAAA2DQwafWhoZWEAAAFgAAAAIAAAACQD8gHCaG10eAAAAewAAAA9AAAAWgZUAjxsb2NhAAACfAAAAFIAAABSO9g44G1heHAAAAGAAAAAHwAAACAAcwCxbmFtZQAACowAAAEeAAACCvbozBJwb3N0AAALrAAAAKUAAAGSei7+yXjaY2BkYGAA4r93tVLi+W2+MnAzMYDA1W+5jDD6/5//e5hYGA8BuRwMYGkAZg0NEnjaY2BkYGA89H8Pgx4Tw/8/DAxMLAxAERTACgB/NwS3eNpjYGRgYNBgaGDgZAABJiBmZACJOTDogQQAFKYBJQB42mNgYfzOOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGAQYECEhzTWFoYFD4qMx44P8BBj3GQwwuIDVIShQYGAFLxAvZAAAAeNpj2M0gyAACq4D4BAMDE8P//wwM//8yOIBoKLBgqAWSkgyuDLpQkSQGZJDE4M9gwNDD4AkmoQAAyxUMjQAAAHjaY2BgYGaAYBkGRgYQcAHyGMF8FgYNIM0GpBkZmBgUPir//w/kK3xk+P///2N+Fqh6IGBkY4BzGJmABBMDKmCEWDGcAQDrXQkJAAAAEQFEAAAAKgAqACoAKgDaAVYBhAGcAcAB0gHmAfQCDAImAkICUAKIArgC2AL4AxADKgM+A1IDagOUA64DwAPYA+wEFAQ8BGQEjgS0BNwFFAVABVwGBAAAeNqFVn1oHMcVn7dfs3sfe7d3t7uSotNp7+Rbxz7J4fb2VnZk+yyQrbhRBcHnBBIlRpQUJ7GkqHFi2bQ9ImPS4JiSIruiqRAYCqZQsGXXwWmJ2sqoDUlbKJSCA/V/pQKX/lUoTff6Zk6KJTXgY+fjvXnzm/d782bmiEAMQsg81IlIKOm7DmTPwA0qkQfl64r8+cANUcAuuS4ytczUN6gCXwzcAKb3DM9wPaNgvPPWyy9DPfypAR6iCc2wuSwI8GvyCjlNyA6LZnTBLeQVqli2RbFx+4DqYGK/kHfzfRBUi26R6bEJDkAfFFDpF4OqXa7ysQAbuwtwrKW1OBRTMkQdcMwrW1K56lfYZCUDoSSJkiyKRlahajyipu2IFutJJtMQ1/VEQlQkgLSR7IlpETulRuKqnjVEVZYk0FO5zVMSBk7JZmV1mz1VsiklEv71SNl22wrlz7NZUZIESCeNQstGi6sK7UrFQRAkKqW6aAvUimqxQncaHchm419lLkmasmGdspk1ek3PlAttrl0+gvGFZrN5VyBwhxxDyTIzGLnifqi4ByS/4lYxkgko5mmRRVmxFTPTJdoKBinPNHsgr3RBDngRygchYzIEHPErB6AMHw2Nj2hqKp3rtuIdsYRWiMdzgzlF1YoRPdYRt7q70nGRJi2L0jSlVBYkQaQ6xtpss1QKmjYyPnT6Ipx+c+jYhXZBVQ47CUFNdZQ6d2a7iqKuqpomyUpCLHZld3aWOlKqELNFUdcjOoAoS4IgppF5QgYhbhigqEL7hWNDbw4RnldfNH8hSLBMkqSDMU+AmUmAUvQNt1j1HBo4tpWFwK/Av6ORW8q41n4rEo3DX343H74zr+yD5Xbt1pKqjDOleUtr/9X8vKI+2LekIjapNZfhPmJTEiUk7ZjUdH3Xd0ynBouLJxZhMTwBjdri/driYqMb9yBs/hJzfJlkCAn48mX0R8kC9wh34zd3ovEEfJqIR++o+iGa+f0nsc7O2Cda7PuR5FFVjf49xjgBljzu5YtEZjgaUHdgAFA9sJLHtontVhuwNQhsWBlo8kF4ETvMeh2rhnY1ZEMMB48oDtWaZH0dPJME/UWyO0zHphrYVCDh2aVeBtC7dL+21Au8x2NN+jEev0V7hcRxhkddz/dcu2AW/AJM16dfr+9dxVIvT0+vruLH53wb58ziHJnFEKkENhWxuAGQ53fOzu58ntcwxZvwP7zZ5revAfOixrhzv9sR82+I2YNC2cqwG4OyjM0XK9WyHRQrgYs6JqCW2lX4oHtXycllboulA6XSAWzF25mcUyoNloSfmxDbNVgyX1MjuVJpfynzmtwhn8zgUMmJy6+YjMMQrvcRrqeTLF8RQV28VooF0w0M36Z+vuhXAnasLCAjpzoLxjP7xvDX6sLZUyNPVArdzr5nDo+NhW9gdfhLDefTi/h/QvzUOh+E8zJWudpaAciz58797Fxl7O2xsUOzs/ANFM49e+iFF94ee+v8LPOPkG6M1QmMcRLzlNo4ycYDzmfP1etzc41qvepoX//x3Bx014/XLs/V1d7Bp3afeu7y3LY80AQ3cHzHZQFv4saHZ+HCEiw3uVDjeSBiMdH+Vf4+4K4GvmcCngobj8bqdLiKKUTqcNzcuxeO773U3885jiPHBZ4HROaJBgvraSqtJ/fWnETcHTyzfEwy0xPIvaP38PsRq+5xu0/R7ibR0I4G7kG8u6gNZGHXxQ+Hhz+8uKv00s2Z5LVryZmbrdzdwDVIO87ABPS35EieRZs9EhPvl97XvOHRycmFyT71DxMjIxNPfwd1bWofaiZHhz0NNU9PbPMVF6cuZjVGPhDIZ595Gx+8t0ngc/6Lc2b52QYb3OAqVB4Pr159fHS95TZraHOZ3zq4j/h84UauDr8+3Bv1519dXYWe6MBz4/1Hj5xmh2xLbNMaQroLrWtipbVx2GnFdhTtrqOdjQJLsz1g8GQzKDs6BwEPD1yjeppO6Rl9iqZ1+kOaoeDgY02nwpMRvJLhyhTVM6inGNMnEO+P/H60CJHyvlEpm0YKYfHxYWg5sCioyeQyFT7+WIkqK6IirihKTYV/qmqYhJ6W+q4g3FVk9O8i4r2x4R9VdjP3dgNzEHcKAT30bxIfF2VQlvtleZBK0jfxhRXha5KihJckWZZgOiZNi2KL71OIdxvx2nDHkZvF7mH0jm16Dgy+9Qa8q5qqqn6gWliSFp1KWInvocJEET8zqU7Be9FEIhp+i+fRQ86Zh5w5ajWHf1rwwmeMZUY0qrRYb/BVkea67i73bxPfHvZSFBhMUH2S+fYku2cMD/m2OJ7cxHuIc5xG0jDNSIeXGF/ty3xsncsESSPyYyRHCnj34yFKY3GwuOxAMdkzdwO2NhaKpVFrhMuNBja1RmOZVQ3AKmywHxvgIuvhR/AVIM0HuN4PtqxH9kMLTeTIjiljYbfDGfbLwcnwykY5f+bMlZkZ6J2Zudzq/WSG8ZD+jwfHZB7DuudrpbWQYPXnNfyFrFoj7PZq/ksAeBdn5MgecpCMkpfIJPkunooy/glo5RI+w1XP3iYHj5ChJRecdXnHNrlnq+iY28ZrbJeCR1fwD76dDd5vbOqf/2r1YzhPVBQRJ997iDPBFXxokza8/SiLiYdouA3/A8bASwsAeNp9jrFqwzAURa8SO02XkLmThg4JxEYypYFsJmC6poXsxhjbYCKjOEOgY7+nn9Kf6Q/0WlaWDjHI7+jpvncvgAW+ITB+T3j1LDBH4XmCB3x6nuIZP54DzEXoOcRSKM8z9j+oFMEjby9uamCBJQ6eJ/RtPU/xhi/PATW/nkNIsfA84/4Uexh0uMKiQYUaPSRWzLlmTaCgscWGnFKVs1+jBPamu9qmqnu5KtYyUXq7kWmXFzXfMobIuaah2ODERpv3TWFI75ytcHECy2tZXdrcDiODsHfVUlE675juEjue/yvHrkbEo/i/5URmTn1mbFXKJFZyJ2/WRB1pFQ1J7yY80tvizKfRR7nNsatDGhxLe264UCkdK6XkvW1/p8hNfwAAeNptzckyg1EABeHbfxAEiVnElKDKMufGkCwJeReb7LyfN0PRS6fqVC+/0pTffX2Wfvlvdz+nNKVFQ4sVVlmjzTobbNJhi2126NJjlz32OeCQI445oc8pA84454JLrhgy4pobbtsfy/dFxmMbW+3E3tsH+2if7NTO7LN9sXP7at/s4q/Rj370ox/96Ec/+tGPfvSjH/3oRz/6Vb/qV/06+QZetFQ1AAAAAAAAAf//AAJ42mNgYGBkAILLmuyKIPrqt1xGGA0ANlUFmAAA"

/***/ }),

/***/ "../../../../../src/app/grid/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline-form-control filter pull-left\" tooltip=\"Filter\" [ngClass]=\"{active: isFilterEnabled}\"\n     (click)=\"changeFilterViewState()\">\n  <input type=\"text\" [(ngModel)]=\"filterTerm\" (keyup)=\"onFilterTextChnage()\" [placeholder]=\"placeholder\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/grid/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = (function () {
    function FilterComponent() {
        this.getFilterTerm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.isFilterEnabled = false;
        this.resetFilterTerm = false;
        this.filterTerm = '';
        this.placeholder = '';
    }
    FilterComponent.prototype.ngOnChanges = function () {
        if (this.resetFilterTerm) {
            this.filterTerm = '';
        }
    };
    /**
     * Change the filter text box view.
     */
    FilterComponent.prototype.changeFilterViewState = function () {
        this.isFilterEnabled = true;
    };
    /**
     * This method will be triggered when the key press event is fired in the text box.
     */
    FilterComponent.prototype.onFilterTextChnage = function () {
        this.getFilterTerm.emit(this.filterTerm);
    };
    return FilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], FilterComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], FilterComponent.prototype, "resetFilterTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], FilterComponent.prototype, "getFilterTerm", void 0);
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'filter',
        template: __webpack_require__("../../../../../src/app/grid/filter/filter.component.html")
    })
    /**
     * Class representing the FilterComponent.
     */
    ,
    __metadata("design:paramtypes", [])
], FilterComponent);

var _a;
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-list\" [ngClass]=\"gridClass\">\n  <ng-container *ngIf=\"isGridView && enableSort\">\n    <div class=\"sort sort-header-panel\">\n      <button class=\"btn\" (click)=\"toggleSortExpand()\">{{sortByCategory}}</button>\n      <button class=\"btn\" [ngClass]=\"{asc: sortAscending, desc: !sortAscending}\" (click)=\"descendingSort()\">\n        <i class=\"flaticon-arrows-2\"></i>\n      </button>\n    </div>\n  </ng-container>\n  <div class=\"grid-header\" [ngClass]=\"{expand: isSortExpand}\">\n    <ng-container *ngIf=\"!enableSort\">\n      <ng-container *ngFor=\"let title of columnTitles\">\n                    <span class=\"header-item\">\n                        {{title}}\n                    </span>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"enableSort\">\n      <ng-container *ngFor=\"let title of columnTitles\">\n                    <span class=\"header-item\"\n                          [ngClass]=\"{asc: sortAscending, desc: !sortAscending, active: sortByCategory === title}\"\n                          (click)=\"getSortCategory($event)\">\n                        {{title}}\n                    </span>\n      </ng-container>\n    </ng-container>\n\n  </div>\n\n\n  <ng-container *ngIf=\"data && data.length !== 0\">\n      <div class=\"table-row-wrapper\">\n        <ng-container *ngFor=\"let item of (sortedData | filter: filterTerm: filterBy)\" class=\" \">\n          <div (click)=\"setSelectedItem(item)\" class=\"list-item\" [ngClass]=\"{'selected': item.selected}\">\n            <ng-template [ngTemplateOutlet]=\"itemTemplate\" [ngOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </div>\n        </ng-container>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n        <div class='list-item'></div>\n      </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"data.length == 0\">\n    <ng-template [ngTemplateOutlet]=\" noDataTemplate ||noDataDefaultTemplate\"></ng-template>\n  </ng-container>\n\n\n</div>\n\n<ng-template #noDataDefaultTemplate>\n  <div class=\"no-data\">\n    <h1>Whoops!</h1>\n    <h2>No data to display. Added data will appear here.</h2>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "/*!\n\n =========================================================\n * Angular Switchable Grid 2 - Version 1.0.7\n =========================================================\n\n * Demo Page: https://sanuradhag.github.io/angular-switchable-grid/\n * GitHub Repo: https://github.com/sanuradhag/angular-switchable-grid\n * Link to npm: https://www.npmjs.com/package/angular-switchable-grid\n\n =========================================================\n\n * Licensed under MIT\n\n */\n/* GOOGLE MATERIAL DESIGN colors pack */\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n\n.flaticon-gear:before {\n  content: \"\\F100\"; }\n\n.flaticon-github-logo:before {\n  content: \"\\F101\"; }\n\n.flaticon-filter-1:before {\n  content: \"\\F102\"; }\n\n.flaticon-filter:before {\n  content: \"\\F103\"; }\n\n.flaticon-black:before {\n  content: \"\\F104\"; }\n\n.flaticon-arrows-10:before {\n  content: \"\\F105\"; }\n\n.flaticon-expand-button:before {\n  content: \"\\F106\"; }\n\n.flaticon-drop-down-arrow:before {\n  content: \"\\F107\"; }\n\n.flaticon-go-back-left-arrow:before {\n  content: \"\\F108\"; }\n\n.flaticon-arrows-9:before {\n  content: \"\\F109\"; }\n\n.flaticon-arrows-7:before {\n  content: \"\\F10A\"; }\n\n.flaticon-arrows-8:before {\n  content: \"\\F10B\"; }\n\n.flaticon-interface-2:before {\n  content: \"\\F10C\"; }\n\n.flaticon-load:before {\n  content: \"\\F10D\"; }\n\n.flaticon-arrows-6:before {\n  content: \"\\F10E\"; }\n\n.flaticon-arrows-5:before {\n  content: \"\\F10F\"; }\n\n.flaticon-arrows-4:before {\n  content: \"\\F110\"; }\n\n.flaticon-web:before {\n  content: \"\\F111\"; }\n\n.flaticon-left-arrow-key:before {\n  content: \"\\F112\"; }\n\n.flaticon-add-plus-button:before {\n  content: \"\\F113\"; }\n\n.flaticon-mark-as-favorite-star:before {\n  content: \"\\F114\"; }\n\n.flaticon-searching-magnifying-glass:before {\n  content: \"\\F115\"; }\n\n.flaticon-close-button:before {\n  content: \"\\F116\"; }\n\n.flaticon-check-symbol:before {\n  content: \"\\F117\"; }\n\n.flaticon-back-arrow:before {\n  content: \"\\F118\"; }\n\n.flaticon-keyboard-right-arrow-button:before {\n  content: \"\\F119\"; }\n\n.flaticon-arrows-3:before {\n  content: \"\\F11A\"; }\n\n.flaticon-upload:before {\n  content: \"\\F11B\"; }\n\n.flaticon-long-arrow-pointing-up:before {\n  content: \"\\F11C\"; }\n\n.flaticon-arrows-2:before {\n  content: \"\\F11D\"; }\n\n.flaticon-arrows-1:before {\n  content: \"\\F11E\"; }\n\n.flaticon-arrows:before {\n  content: \"\\F11F\"; }\n\n.flaticon-app:before {\n  content: \"\\F120\"; }\n\n.flaticon-interface-1:before {\n  content: \"\\F121\"; }\n\n.flaticon-squares:before {\n  content: \"\\F122\"; }\n\n.flaticon-interface:before {\n  content: \"\\F123\"; }\n\n/** Material design flat button styles **/\n.md-btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all .15s ease-in-out;\n  -o-transition: all .15s ease-in-out;\n  -moz-transition: all .15s ease-in-out;\n  -webkit-transition: all .15s ease-in-out; }\n  .md-btn:focus, .md-btn:active, .md-btn.active, .md-btn:active:focus, .md-btn.active:focus {\n    outline: 0;\n    outline-offset: 0;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none; }\n\n.btn-flat-default {\n  background-color: transparent;\n  border: 1px solid #212121; }\n  .btn-flat-default:hover, .btn-flat-default:active {\n    background-color: #d4d3d3; }\n  .btn-flat-default:disabled, .btn-flat-default.disabled, .btn-flat-default[disabled] {\n    background-color: #e0e0e0; }\n  .btn-flat-default .ink {\n    background-color: white; }\n\n:host /deep/ .grid-list {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  padding: 3px 0 0 0px;\n  position: relative; }\n  :host /deep/ .grid-list .sort {\n    text-align: right;\n    padding: 0 15px; }\n    :host /deep/ .grid-list .sort.sort-header-panel {\n      height: 31px;\n      border-bottom: 1px solid #f5f5f5;\n      padding: 8px 20px; }\n    :host /deep/ .grid-list .sort button {\n      outline: none;\n      border: 1px solid #212121;\n      border-radius: 2px;\n      cursor: pointer; }\n      :host /deep/ .grid-list .sort button.btn {\n        font-size: 14px;\n        text-decoration: none;\n        color: #424242;\n        padding: 5px 10px;\n        background: none; }\n        :host /deep/ .grid-list .sort button.btn i {\n          transition: all 0.2s ease-in;\n          display: inline-block; }\n        :host /deep/ .grid-list .sort button.btn:hover, :host /deep/ .grid-list .sort button.btn:active {\n          background-color: #d4d3d3;\n          box-shadow: 0 1px 2px #f5f5f5;\n          outline: none; }\n        :host /deep/ .grid-list .sort button.btn.asc i {\n          -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n        :host /deep/ .grid-list .sort button.btn.desc i {\n          -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n      :host /deep/ .grid-list .sort button [class^='flaticon-']:before {\n        font-size: 14px; }\n  :host /deep/ .grid-list .grid-header {\n    display: none; }\n    :host /deep/ .grid-list .grid-header.expand {\n      display: block;\n      position: absolute;\n      top: 44px;\n      right: 63px;\n      background: #ffffff;\n      box-shadow: 0 1px 5px #424242;\n      z-index: 4;\n      padding: 5px 0; }\n      :host /deep/ .grid-list .grid-header.expand span {\n        display: block;\n        padding: 10px 10px 10px 15px;\n        min-width: 250px;\n        cursor: pointer;\n        font-size: 14px;\n        position: relative;\n        font-weight: 400; }\n        :host /deep/ .grid-list .grid-header.expand span:hover {\n          background: #f5f5f5; }\n        :host /deep/ .grid-list .grid-header.expand span.active:before {\n          content: \"\\F11C\";\n          font-family: Flaticon;\n          font-size: 16px;\n          position: absolute;\n          right: 15px; }\n  :host /deep/ .grid-list .table-row-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px 5px 0 5px;\n    overflow: auto; }\n    :host /deep/ .grid-list .table-row-wrapper .list-item {\n      background-color: rgba(181, 167, 208, 0.07);\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 250px;\n              flex: 1 0 250px;\n      margin: 0 10px 20px 10px;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 3px;\n      position: relative;\n      cursor: pointer;\n      padding: 10px;\n      min-height: 160px;\n      border-bottom: 3px solid transparent;\n      transition: all 0.3s ease-in-out; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item:empty {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 0;\n        border: none;\n        margin-bottom: 0;\n        min-height: 0;\n        padding: 0; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item .avatar {\n        margin-bottom: 10px; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img {\n          padding: 5px;\n          border-radius: 3px;\n          border: 1px solid #e0e0e0;\n          background-color: transparent;\n          box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.18), 0 4px 20px 0 rgba(0, 0, 0, 0.02), 0 7px 8px -5px rgba(0, 0, 0, 0.1); }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.red {\n            background-color: #e53935; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.pink {\n            background-color: #d81b60; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.purple {\n            background-color: #8e24aa; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.blue {\n            background-color: #1e88e5; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.green {\n            background-color: #43a047; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.yellow {\n            background-color: #fdd835; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.brown {\n            background-color: #6d4c41; }\n          :host /deep/ .grid-list .table-row-wrapper .list-item .avatar img.grey {\n            background-color: #757575; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item div.hidden-grid, :host /deep/ .grid-list .table-row-wrapper .list-item img.hidden-grid {\n        display: none; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item div.show-grid, :host /deep/ .grid-list .table-row-wrapper .list-item img.show-grid {\n        display: block; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item div.inline, :host /deep/ .grid-list .table-row-wrapper .list-item img.inline {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item div.bold, :host /deep/ .grid-list .table-row-wrapper .list-item img.bold {\n        font-weight: 600; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item div.italic, :host /deep/ .grid-list .table-row-wrapper .list-item img.italic {\n        font-style: italic; }\n      :host /deep/ .grid-list .table-row-wrapper .list-item:hover {\n        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3); }\n      :host /deep/ .grid-list .table-row-wrapper .list-item.selected {\n        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.4);\n        border-bottom: 3px solid #9e9e9e; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected .name {\n          color: #f5f5f5; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected .status {\n          background: #448aff;\n          height: 42px;\n          z-index: 2; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.red {\n          border-bottom: 3px solid #e53935; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.pink {\n          border-bottom: 3px solid #d81b60; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.purple {\n          border-bottom: 3px solid #8e24aa; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.blue {\n          border-bottom: 3px solid #1e88e5; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.green {\n          border-bottom: 3px solid #43a047; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.yellow {\n          border-bottom: 3px solid #fdd835; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.brown {\n          border-bottom: 3px solid #6d4c41; }\n        :host /deep/ .grid-list .table-row-wrapper .list-item.selected.grey {\n          border-bottom: 3px solid #757575; }\n  :host /deep/ .grid-list.table-grid {\n    display: table;\n    table-layout: fixed;\n    padding: 0;\n    width: 100%; }\n    :host /deep/ .grid-list.table-grid .sort {\n      display: none; }\n    :host /deep/ .grid-list.table-grid .grid-header {\n      display: table-header-group;\n      width: 100%;\n      background: #fafafa; }\n      :host /deep/ .grid-list.table-grid .grid-header span {\n        display: table-cell;\n        line-height: 36px;\n        border-bottom: 1px solid #f5f5f5;\n        padding: 0 10px;\n        font-size: 12px;\n        cursor: pointer;\n        height: 70px;\n        position: relative;\n        font-weight: 600; }\n        :host /deep/ .grid-list.table-grid .grid-header span:hover {\n          background: #f0f0f0; }\n        :host /deep/ .grid-list.table-grid .grid-header span.active:before {\n          content: \"\\F11C\";\n          font-family: Flaticon;\n          font-size: 16px;\n          position: absolute;\n          right: 10px;\n          transition: all 0.2s ease-in; }\n        :host /deep/ .grid-list.table-grid .grid-header span.active.asc:before {\n          -webkit-transform: rotate(0deg);\n          transform: rotate(0deg); }\n        :host /deep/ .grid-list.table-grid .grid-header span.active.desc:before {\n          -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n    :host /deep/ .grid-list.table-grid .table-row-wrapper {\n      display: table-row-group; }\n      :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item {\n        display: table-row;\n        margin: 0;\n        box-shadow: none;\n        min-height: 45px;\n        padding: 0;\n        position: relative; }\n        :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item.selected {\n          background: #498dff; }\n          :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item.selected:hover {\n            background: #498dff; }\n          :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item.selected div {\n            color: #f5f5f5;\n            border-bottom-color: #2b7aff; }\n        :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item div, :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item img {\n          display: table-cell;\n          position: static;\n          font-size: 14px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          line-height: 40px;\n          padding: 0 10px;\n          border-bottom: 1px solid #f5f5f5;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n          :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item div [class^=\"flaticon-\"]:before, :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item img [class^=\"flaticon-\"]:before {\n            font-size: 16px; }\n          :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item div.hidden-table, :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item img.hidden-table {\n            display: none; }\n          :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item div.show-table, :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item img.show-table {\n            display: table-cell; }\n        :host /deep/ .grid-list.table-grid .table-row-wrapper .list-item:hover {\n          background: #f5f5f5; }\n\n:host /deep/ .no-data {\n  position: absolute;\n  top: 75px;\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 100px; }\n  :host /deep/ .no-data h2 {\n    font-size: 24px; }\n  :host /deep/ .no-data [class^=\"flaticon-\"]:before {\n    font-size: 30px; }\n\n@font-face {\n  font-family: \"Flaticon\";\n  src: url(" + __webpack_require__("../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.eot") + ");\n  src: url(" + __webpack_require__("../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.eot") + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__("../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.woff") + ") format(\"woff\"), url(" + __webpack_require__("../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.ttf") + ") format(\"truetype\"), url(" + __webpack_require__("../../../../../src/app/grid/assets/fonts/flaticon/Flaticon.svg") + "#Flaticon) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xlsx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridComponent = (function () {
    function GridComponent() {
        this.getSelectedItems = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.data = [];
        this.sortedData = this.data;
        this.isSortExpand = false;
        this.filterTerm = '';
        this.sortByCategory = '';
        this.filterBy = '';
        this.selectedItems = [];
        this.enableMultiSelect = null;
        this.enableSort = false;
        this.enableSelection = true;
        this.sortAscending = true;
        this.dataObjectKeys = [];
        this.formattedStrings = [];
    }
    GridComponent.prototype.ngOnChanges = function (changes) {
        this.gridClass = this.isGridView ? '' : 'table-grid';
        this.sortedData = this.data;
        if (changes.data) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.selectedItems, function (item) {
                item.selected = false;
            });
            this.selectedItems = [];
            this.sortByCategory = this.columnTitles[0];
        }
        this.dataObjectKeys = __WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](this.data[0]);
    };
    /**
     * Toggle the view of sort category menu between collapsed and expand.
     */
    GridComponent.prototype.toggleSortExpand = function () {
        this.isSortExpand = !this.isSortExpand;
    };
    /**
     * Get the sort category from the sort category dropdown.
     * @param element - selected menu items html element.
     */
    GridComponent.prototype.getSortCategory = function (element) {
        if (this.sortByCategory === element.target.textContent.trim()) {
            this.sortAscending = !this.sortAscending;
            this.sortedData = __WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"](this.sortedData);
            element.target.className = 'active';
            return;
        }
        this.sortByCategory = element.target.textContent.trim();
        this.sortedData = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](this.sortedData, ([this.mapSortByCategory(this.sortByCategory)]));
        this.isSortExpand = false;
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](element.target.parentElement.children, function (child) {
            child.className = 'header-item';
        });
        element.target.className = 'active';
    };
    /**
     * Toggle the sort between ascending and descending.
     */
    GridComponent.prototype.descendingSort = function () {
        this.sortAscending = !this.sortAscending;
        this.sortedData = __WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"](this.sortedData);
    };
    /**
     * Select all items in the grid.
     */
    GridComponent.prototype.selectAll = function () {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.data, function (item) {
            item.selected = true;
        });
        this.selectedItems = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.data);
        this.getSelectedItems.emit(this.selectedItems);
    };
    /**
     * Deselect all items in the grid.
     */
    GridComponent.prototype.deselectAll = function () {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.data, function (item) {
            item.selected = false;
        });
        this.selectedItems = [];
        this.getSelectedItems.emit([]);
    };
    /**
     * Set the selected item from the item list.
     * @param selectedItem - selected item.
     */
    GridComponent.prototype.setSelectedItem = function (selectedItem) {
        if (!this.enableSelection) {
            return;
        }
        if (this.enableMultiSelect == null) {
            return;
        }
        if (selectedItem.selected) {
            selectedItem.selected = false;
            __WEBPACK_IMPORTED_MODULE_1_lodash__["remove"](this.selectedItems, function (item) {
                return item.id === selectedItem.id;
            });
            this.getSelectedItems.emit(this.selectedItems);
        }
        else {
            this.setSelectionPattern(selectedItem);
        }
    };
    /**
     * Emits selected item(s) according to the selection type(single/multiple).
     * @param item - selected item.
     */
    GridComponent.prototype.setSelectionPattern = function (item) {
        if (!this.enableMultiSelect) {
            var index = __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](this.sortedData, ['selected', true]);
            index !== -1 ? this.sortedData[index].selected = false : {};
            this.selectedItems = [item];
            item.selected = true;
            this.getSelectedItems.emit(this.selectedItems);
        }
        else {
            this.selectedItems.push(item);
            item.selected = true;
            this.getSelectedItems.emit(this.selectedItems);
        }
    };
    /**
     * This method triggers when the document is clicked.
     * @param element - html element.
     */
    GridComponent.prototype.onclick = function (element) {
        if (this.isSortExpand && (element.target.className !== 'btn' && element.target.className !== 'header-item')) {
            this.isSortExpand = false;
        }
        if (this.isSortExpand && element.target.parentElement.className.includes('grid-header')) {
            this.isSortExpand = true;
        }
    };
    /**
     * Get the key from grid data object to create sorting categories.
     * @param columnName - column name.
     * @returns {string} - object key corresponding to the column name.
     */
    GridComponent.prototype.mapSortByCategory = function (columnName) {
        var _this = this;
        var objectIndex;
        objectIndex = 0;
        columnName = columnName.toLocaleLowerCase();
        columnName = columnName.replace(' ', '');
        if (this.dataObjectKeys.length === 0) {
            this.dataObjectKeys = __WEBPACK_IMPORTED_MODULE_1_lodash__["keys"](this.data[0]);
        }
        if (this.formattedStrings.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.dataObjectKeys, function (property) {
                var formattedString = __WEBPACK_IMPORTED_MODULE_1_lodash__["replace"](property, new RegExp('[^a-zA-Z0-9]+'), '');
                _this.formattedStrings.push(formattedString);
            });
        }
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.formattedStrings, function (propertyName, index) {
            if (propertyName.toLowerCase() === columnName) {
                objectIndex = index;
            }
        });
        return this.dataObjectKeys[objectIndex];
    };
    /**
     * Export the grid data as a excel file.
     */
    GridComponent.prototype.exportAsExcelFile = function () {
        var json = this.data;
        var excelFileName = 'angular_switchable_grid_data';
        var worksheet = __WEBPACK_IMPORTED_MODULE_3_xlsx__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_3_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    /**
     * Save the exported excel file.
     * @param buffer
     * @param fileName - file name.
     */
    GridComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        var EXCEL_EXTENSION = '.xlsx';
        var file = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](file, "" + fileName + EXCEL_EXTENSION);
    };
    return GridComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], GridComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Array)
], GridComponent.prototype, "columnTitles", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], GridComponent.prototype, "enableSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], GridComponent.prototype, "enableMultiSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], GridComponent.prototype, "filterTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], GridComponent.prototype, "filterBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], GridComponent.prototype, "enableSort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Boolean)
], GridComponent.prototype, "isGridView", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */]) === "function" && _a || Object)
], GridComponent.prototype, "noDataTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _b || Object)
], GridComponent.prototype, "getSelectedItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */]) === "function" && _c || Object)
], GridComponent.prototype, "itemTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GridComponent.prototype, "onclick", null);
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'angular-switchable-grid',
        template: __webpack_require__("../../../../../src/app/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grid/grid.component.scss")]
    })
    /**
     * Class representing the grid component.
     */
    ,
    __metadata("design:paramtypes", [])
], GridComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/grid/grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_component__ = __webpack_require__("../../../../../src/app/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter_component__ = __webpack_require__("../../../../../src/app/grid/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/grid/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__grid_component__["a" /* GridComponent */], __WEBPACK_IMPORTED_MODULE_4__filter_filter_component__["a" /* FilterComponent */], __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* ItemFilterPipe */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__grid_component__["a" /* GridComponent */], __WEBPACK_IMPORTED_MODULE_4__filter_filter_component__["a" /* FilterComponent */], __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* ItemFilterPipe */]],
        providers: [],
    })
], GridModule);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/grid.module.js.map

/***/ }),

/***/ "../../../../../src/app/grid/package.json":
/***/ (function(module, exports) {

module.exports = {"name":"angular-switchable-grid","version":"1.0.10","license":"MIT","angular-cli":{},"keywords":["angular grid","angular tile grid","angular list grid","angular switchable grid"],"homepage":"https://github.com/sanuradhag/angular-switchable-grid","bugs":{"url":"https://github.com/sanuradhag/angular-switchable-grid/issuess"},"repository":{"type":"git","url":"https://github.com/sanuradhag/angular-switchable-grid.git"},"scripts":{"ng":"ng","start":"ng serve","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":false,"dependencies":{"compass-mixins":"^0.12.10","lodash":"^4.17.4","file-saver":"^1.3.3","xlsx":"^0.11.3"},"devDependencies":{"@angular/cli":"1.0.0-beta.31","@angular/compiler-cli":"^2.4.0","@types/jasmine":"2.5.38","@types/node":"^6.0.42","codelyzer":"~2.0.0-beta.1","jasmine-core":"2.5.2","jasmine-spec-reporter":"2.5.0","karma":"1.2.0","karma-chrome-launcher":"^2.0.0","karma-cli":"^1.0.1","karma-jasmine":"^1.0.2","karma-coverage-istanbul-reporter":"^0.2.0","protractor":"~5.1.0","ts-node":"1.2.1","tslint":"^4.3.0","typescript":"~2.0.0"}}

/***/ }),

/***/ "../../../../../src/app/grid/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItemFilterPipe = (function () {
    /**
     * Pipe for filtering the device list.
     */
    function ItemFilterPipe() {
    }
    ItemFilterPipe.prototype.transform = function (itemList, filterTerm, filterBy) {
        filterBy = filterBy.toString();
        if (filterTerm === '') {
            return itemList;
        }
        return itemList.filter(function (item) {
            if (item[filterBy]) {
                return item[filterBy].toString().toLowerCase().includes(filterTerm.toLowerCase());
            }
        });
    };
    return ItemFilterPipe;
}());
ItemFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'filter' })
    /**
     * Pipe for filtering the device list.
     */
], ItemFilterPipe);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
var users = [{
        'id': 1,
        'first_name': 'Nero',
        'last_name': 'Nellis',
        'email': 'nnellis0@stanford.edu',
        'gender': 'Male',
        'ip_address': '0.76.84.141',
        'avatar': 'https://robohash.org/sequiutrerum.bmp?size=80x80&set=set2'
    }, {
        'id': 2,
        'first_name': 'Issy',
        'last_name': 'Buncher',
        'email': 'ibuncher1@creativecommons.org',
        'gender': 'Female',
        'ip_address': '138.223.6.166',
        'avatar': 'https://robohash.org/porrofaceresuscipit.bmp?size=80x80&set=set2'
    }, {
        'id': 3,
        'first_name': 'Maison',
        'last_name': 'Tilliards',
        'email': 'mtilliards2@cam.ac.uk',
        'gender': 'Male',
        'ip_address': '60.13.165.213',
        'avatar': 'https://robohash.org/quiaquaeexcepturi.bmp?size=80x80&set=set2'
    }, {
        'id': 4,
        'first_name': 'Dorie',
        'last_name': 'Le Barr',
        'email': 'dlebarr3@csmonitor.com',
        'gender': 'Male',
        'ip_address': '115.221.251.48',
        'avatar': 'https://robohash.org/voluptateblanditiisin.bmp?size=80x80&set=set2'
    }, {
        'id': 5,
        'first_name': 'Granville',
        'last_name': 'MacArthur',
        'email': 'gmacarthur4@webmd.com',
        'gender': 'Male',
        'ip_address': '115.116.1.19',
        'avatar': 'https://robohash.org/quiaalaudantium.bmp?size=80x80&set=set2'
    }, {
        'id': 6,
        'first_name': 'Blinni',
        'last_name': 'Carse',
        'email': 'bcarse5@g.co',
        'gender': 'Female',
        'ip_address': '173.228.135.90',
        'avatar': 'https://robohash.org/nihilidsint.bmp?size=80x80&set=set2'
    }, {
        'id': 7,
        'first_name': 'Anabel',
        'last_name': 'Roache',
        'email': 'aroache6@ihg.com',
        'gender': 'Female',
        'ip_address': '5.177.185.80',
        'avatar': 'https://robohash.org/earumquiincidunt.bmp?size=80x80&set=set2'
    }, {
        'id': 8,
        'first_name': 'Josias',
        'last_name': 'Simcoe',
        'email': 'jsimcoe7@nationalgeographic.com',
        'gender': 'Male',
        'ip_address': '119.2.151.163',
        'avatar': 'https://robohash.org/voluptatibusconsequaturtenetur.bmp?size=80x80&set=set2'
    }, {
        'id': 9,
        'first_name': 'Dionisio',
        'last_name': 'Duffil',
        'email': 'dduffil8@over-blog.com',
        'gender': 'Male',
        'ip_address': '58.162.37.2',
        'avatar': 'https://robohash.org/blanditiismodialiquid.bmp?size=80x80&set=set2'
    }, {
        'id': 10,
        'first_name': 'Nowell',
        'last_name': 'Kleinmintz',
        'email': 'nkleinmintz9@chicagotribune.com',
        'gender': 'Male',
        'ip_address': '255.85.10.9',
        'avatar': 'https://robohash.org/sedprovidentnisi.bmp?size=80x80&set=set2'
    }, {
        'id': 11,
        'first_name': 'Everard',
        'last_name': 'Mose',
        'email': 'emosea@toplist.cz',
        'gender': 'Male',
        'ip_address': '66.72.168.10',
        'avatar': 'https://robohash.org/cupiditatenostrumprovident.bmp?size=80x80&set=set2'
    }, {
        'id': 12,
        'first_name': 'Mylo',
        'last_name': 'Have',
        'email': 'mhaveb@zdnet.com',
        'gender': 'Male',
        'ip_address': '5.218.176.172',
        'avatar': 'https://robohash.org/distinctioautfacere.bmp?size=80x80&set=set2'
    }, {
        'id': 13,
        'first_name': 'Julietta',
        'last_name': 'Napoleone',
        'email': 'jnapoleonec@spotify.com',
        'gender': 'Female',
        'ip_address': '161.98.97.233',
        'avatar': 'https://robohash.org/eumducimusenim.bmp?size=80x80&set=set2'
    }, {
        'id': 14,
        'first_name': 'Candy',
        'last_name': 'Poinsett',
        'email': 'cpoinsettd@baidu.com',
        'gender': 'Female',
        'ip_address': '71.7.24.45',
        'avatar': 'https://robohash.org/quiadoloremmodi.bmp?size=80x80&set=set2'
    }, {
        'id': 15,
        'first_name': 'Agnola',
        'last_name': 'Varsey',
        'email': 'avarseye@php.net',
        'gender': 'Female',
        'ip_address': '229.174.209.219',
        'avatar': 'https://robohash.org/idquiapariatur.bmp?size=80x80&set=set2'
    }, {
        'id': 16,
        'first_name': 'Alejandra',
        'last_name': 'Cusiter',
        'email': 'acusiterf@engadget.com',
        'gender': 'Female',
        'ip_address': '164.163.234.210',
        'avatar': 'https://robohash.org/quonisiest.bmp?size=80x80&set=set2'
    }, {
        'id': 17,
        'first_name': 'Madelle',
        'last_name': 'Stalman',
        'email': 'mstalmang@quantcast.com',
        'gender': 'Female',
        'ip_address': '150.89.27.96',
        'avatar': 'https://robohash.org/oditbeataeconsectetur.bmp?size=80x80&set=set2'
    }, {
        'id': 18,
        'first_name': 'Rafaello',
        'last_name': 'Bolletti',
        'email': 'rbollettih@senate.gov',
        'gender': 'Male',
        'ip_address': '184.108.86.3',
        'avatar': 'https://robohash.org/consequaturitaquemolestiae.bmp?size=80x80&set=set2'
    }, {
        'id': 19,
        'first_name': 'Chrysler',
        'last_name': 'Le Marquand',
        'email': 'clemarquandi@exblog.jp',
        'gender': 'Female',
        'ip_address': '75.129.59.50',
        'avatar': 'https://robohash.org/expariaturmaiores.bmp?size=80x80&set=set2'
    }, {
        'id': 20,
        'first_name': 'Clarissa',
        'last_name': 'Furney',
        'email': 'cfurneyj@epa.gov',
        'gender': 'Female',
        'ip_address': '245.100.192.216',
        'avatar': 'https://robohash.org/commodimagnamminima.bmp?size=80x80&set=set2'
    }, {
        'id': 21,
        'first_name': 'Guenna',
        'last_name': 'Haugh',
        'email': 'ghaughk@hostgator.com',
        'gender': 'Female',
        'ip_address': '35.151.190.139',
        'avatar': 'https://robohash.org/inestquaerat.bmp?size=80x80&set=set2'
    }, {
        'id': 22,
        'first_name': 'Gregory',
        'last_name': 'Japp',
        'email': 'gjappl@elegantthemes.com',
        'gender': 'Male',
        'ip_address': '48.55.111.60',
        'avatar': 'https://robohash.org/enimvoluptatesrepudiandae.bmp?size=80x80&set=set2'
    }, {
        'id': 23,
        'first_name': 'Dorry',
        'last_name': 'Oxlade',
        'email': 'doxladem@vkontakte.ru',
        'gender': 'Female',
        'ip_address': '51.233.192.132',
        'avatar': 'https://robohash.org/sapientequisquamsuscipit.bmp?size=80x80&set=set2'
    }, {
        'id': 24,
        'first_name': 'Anestassia',
        'last_name': 'Crawshaw',
        'email': 'acrawshawn@surveymonkey.com',
        'gender': 'Female',
        'ip_address': '7.169.207.42',
        'avatar': 'https://robohash.org/quidolorumrepellat.bmp?size=80x80&set=set2'
    }, {
        'id': 25,
        'first_name': 'Llewellyn',
        'last_name': 'Delucia',
        'email': 'ldeluciao@wikipedia.org',
        'gender': 'Male',
        'ip_address': '219.139.245.221',
        'avatar': 'https://robohash.org/omnisipsumincidunt.bmp?size=80x80&set=set2'
    }, {
        'id': 26,
        'first_name': 'Brok',
        'last_name': 'Leggin',
        'email': 'blegginp@squarespace.com',
        'gender': 'Male',
        'ip_address': '137.85.62.152',
        'avatar': 'https://robohash.org/sapientevelitalias.bmp?size=80x80&set=set2'
    }, {
        'id': 27,
        'first_name': 'Ritchie',
        'last_name': 'Revans',
        'email': 'rrevansq@engadget.com',
        'gender': 'Male',
        'ip_address': '151.75.214.98',
        'avatar': 'https://robohash.org/enimaddolore.bmp?size=80x80&set=set2'
    }, {
        'id': 28,
        'first_name': 'Stanfield',
        'last_name': 'Reichartz',
        'email': 'sreichartzr@upenn.edu',
        'gender': 'Male',
        'ip_address': '27.230.160.162',
        'avatar': 'https://robohash.org/veroveritatisest.bmp?size=80x80&set=set2'
    }, {
        'id': 29,
        'first_name': 'Lilli',
        'last_name': 'Lewer',
        'email': 'llewers@blogs.com',
        'gender': 'Female',
        'ip_address': '145.133.238.187',
        'avatar': 'https://robohash.org/isteeavoluptatem.bmp?size=80x80&set=set2'
    }, {
        'id': 30,
        'first_name': 'Boyce',
        'last_name': 'Eyckelberg',
        'email': 'beyckelbergt@blogger.com',
        'gender': 'Male',
        'ip_address': '18.47.174.95',
        'avatar': 'https://robohash.org/suntdolorveritatis.bmp?size=80x80&set=set2'
    }, {
        'id': 31,
        'first_name': 'Orrin',
        'last_name': 'Coxall',
        'email': 'ocoxallu@parallels.com',
        'gender': 'Male',
        'ip_address': '245.249.241.69',
        'avatar': 'https://robohash.org/doloremarchitectodolore.bmp?size=80x80&set=set2'
    }, {
        'id': 32,
        'first_name': 'Jandy',
        'last_name': 'Fevers',
        'email': 'jfeversv@un.org',
        'gender': 'Female',
        'ip_address': '183.84.236.117',
        'avatar': 'https://robohash.org/utadvoluptatem.bmp?size=80x80&set=set2'
    }, {
        'id': 33,
        'first_name': 'Auroora',
        'last_name': 'Donizeau',
        'email': 'adonizeauw@umn.edu',
        'gender': 'Female',
        'ip_address': '206.124.238.157',
        'avatar': 'https://robohash.org/sapientevoluptatemcumque.bmp?size=80x80&set=set2'
    }, {
        'id': 34,
        'first_name': 'Andrej',
        'last_name': 'Murkin',
        'email': 'amurkinx@seesaa.net',
        'gender': 'Male',
        'ip_address': '124.230.116.231',
        'avatar': 'https://robohash.org/ipsamminusfuga.bmp?size=80x80&set=set2'
    }, {
        'id': 35,
        'first_name': 'Idelle',
        'last_name': 'Cometto',
        'email': 'icomettoy@t.co',
        'gender': 'Female',
        'ip_address': '116.102.211.150',
        'avatar': 'https://robohash.org/nihilutaliquid.bmp?size=80x80&set=set2'
    }, {
        'id': 36,
        'first_name': 'Culley',
        'last_name': 'Casson',
        'email': 'ccassonz@xing.com',
        'gender': 'Male',
        'ip_address': '173.246.184.47',
        'avatar': 'https://robohash.org/velutvero.bmp?size=80x80&set=set2'
    }, {
        'id': 37,
        'first_name': 'Odelle',
        'last_name': 'Coorington',
        'email': 'ocoorington10@answers.com',
        'gender': 'Female',
        'ip_address': '132.76.0.13',
        'avatar': 'https://robohash.org/earumoditnumquam.bmp?size=80x80&set=set2'
    }, {
        'id': 38,
        'first_name': 'Burke',
        'last_name': 'Blaymires',
        'email': 'bblaymires11@domainmarket.com',
        'gender': 'Male',
        'ip_address': '39.177.99.61',
        'avatar': 'https://robohash.org/commodicumvitae.bmp?size=80x80&set=set2'
    }, {
        'id': 39,
        'first_name': 'Ingelbert',
        'last_name': 'Raspison',
        'email': 'iraspison12@businessweek.com',
        'gender': 'Male',
        'ip_address': '103.221.208.138',
        'avatar': 'https://robohash.org/liberoeaodit.bmp?size=80x80&set=set2'
    }, {
        'id': 40,
        'first_name': 'Alfy',
        'last_name': 'Kneebone',
        'email': 'akneebone13@cmu.edu',
        'gender': 'Female',
        'ip_address': '18.158.143.49',
        'avatar': 'https://robohash.org/nonvelsed.bmp?size=80x80&set=set2'
    }, {
        'id': 41,
        'first_name': 'Teriann',
        'last_name': 'Keys',
        'email': 'tkeys14@google.cn',
        'gender': 'Female',
        'ip_address': '62.220.59.54',
        'avatar': 'https://robohash.org/nihilmolestiasaut.bmp?size=80x80&set=set2'
    }, {
        'id': 42,
        'first_name': 'Bar',
        'last_name': 'Tomasello',
        'email': 'btomasello15@lulu.com',
        'gender': 'Male',
        'ip_address': '187.16.123.35',
        'avatar': 'https://robohash.org/perferendisinventoreaperiam.bmp?size=80x80&set=set2'
    }, {
        'id': 43,
        'first_name': 'Jorgan',
        'last_name': 'Beville',
        'email': 'jbeville16@joomla.org',
        'gender': 'Male',
        'ip_address': '132.151.49.145',
        'avatar': 'https://robohash.org/atquevoluptastempora.bmp?size=80x80&set=set2'
    }, {
        'id': 44,
        'first_name': 'Mignonne',
        'last_name': 'Canedo',
        'email': 'mcanedo17@amazon.de',
        'gender': 'Female',
        'ip_address': '48.61.114.68',
        'avatar': 'https://robohash.org/etcorporiset.bmp?size=80x80&set=set2'
    }, {
        'id': 45,
        'first_name': 'Douglas',
        'last_name': 'Kliemke',
        'email': 'dkliemke18@is.gd',
        'gender': 'Male',
        'ip_address': '12.199.36.160',
        'avatar': 'https://robohash.org/facereutsed.bmp?size=80x80&set=set2'
    }, {
        'id': 46,
        'first_name': 'Natale',
        'last_name': 'Ponton',
        'email': 'nponton19@jimdo.com',
        'gender': 'Male',
        'ip_address': '76.164.204.163',
        'avatar': 'https://robohash.org/quaedelenitisoluta.bmp?size=80x80&set=set2'
    }, {
        'id': 47,
        'first_name': 'Maryanne',
        'last_name': 'Wyles',
        'email': 'mwyles1a@soup.io',
        'gender': 'Female',
        'ip_address': '153.29.156.205',
        'avatar': 'https://robohash.org/eaautnesciunt.bmp?size=80x80&set=set2'
    }, {
        'id': 48,
        'first_name': 'Roderic',
        'last_name': 'Shiell',
        'email': 'rshiell1b@economist.com',
        'gender': 'Male',
        'ip_address': '97.26.159.4',
        'avatar': 'https://robohash.org/sedaliasdolores.bmp?size=80x80&set=set2'
    }, {
        'id': 49,
        'first_name': 'Lanie',
        'last_name': 'Souness',
        'email': 'lsouness1c@sina.com.cn',
        'gender': 'Male',
        'ip_address': '204.236.106.185',
        'avatar': 'https://robohash.org/utanimifugit.bmp?size=80x80&set=set2'
    }, {
        'id': 50,
        'first_name': 'Reiko',
        'last_name': 'Megson',
        'email': 'rmegson1d@kickstarter.com',
        'gender': 'Female',
        'ip_address': '115.104.157.234',
        'avatar': 'https://robohash.org/optioetdistinctio.bmp?size=80x80&set=set2'
    }, {
        'id': 51,
        'first_name': 'Stephen',
        'last_name': 'Donoghue',
        'email': 'sdonoghue1e@dailymail.co.uk',
        'gender': 'Male',
        'ip_address': '143.247.202.209',
        'avatar': 'https://robohash.org/atculpaaut.bmp?size=80x80&set=set2'
    }, {
        'id': 52,
        'first_name': 'Minni',
        'last_name': 'Pinwell',
        'email': 'mpinwell1f@reddit.com',
        'gender': 'Female',
        'ip_address': '253.222.249.96',
        'avatar': 'https://robohash.org/atquelaborenemo.bmp?size=80x80&set=set2'
    }, {
        'id': 53,
        'first_name': 'Arvin',
        'last_name': 'Hylton',
        'email': 'ahylton1g@smh.com.au',
        'gender': 'Male',
        'ip_address': '87.85.206.66',
        'avatar': 'https://robohash.org/temporaipsumest.bmp?size=80x80&set=set2'
    }, {
        'id': 54,
        'first_name': 'Daron',
        'last_name': 'Hendrickx',
        'email': 'dhendrickx1h@reddit.com',
        'gender': 'Female',
        'ip_address': '28.86.83.157',
        'avatar': 'https://robohash.org/autetnihil.bmp?size=80x80&set=set2'
    }, {
        'id': 55,
        'first_name': 'Gennifer',
        'last_name': 'Dunbobin',
        'email': 'gdunbobin1i@tmall.com',
        'gender': 'Female',
        'ip_address': '219.214.225.104',
        'avatar': 'https://robohash.org/commodiutquas.bmp?size=80x80&set=set2'
    }, {
        'id': 56,
        'first_name': 'Lonnard',
        'last_name': 'Bendtsen',
        'email': 'lbendtsen1j@imdb.com',
        'gender': 'Male',
        'ip_address': '205.161.106.233',
        'avatar': 'https://robohash.org/adnostrumqui.bmp?size=80x80&set=set2'
    }, {
        'id': 57,
        'first_name': 'Carny',
        'last_name': 'Wyeth',
        'email': 'cwyeth1k@godaddy.com',
        'gender': 'Male',
        'ip_address': '137.105.201.225',
        'avatar': 'https://robohash.org/quaslaudantiumquos.bmp?size=80x80&set=set2'
    }, {
        'id': 58,
        'first_name': 'Brandyn',
        'last_name': 'Coleborn',
        'email': 'bcoleborn1l@theglobeandmail.com',
        'gender': 'Male',
        'ip_address': '174.69.30.245',
        'avatar': 'https://robohash.org/enimsintveniam.bmp?size=80x80&set=set2'
    }, {
        'id': 59,
        'first_name': 'Purcell',
        'last_name': 'Borland',
        'email': 'pborland1m@google.it',
        'gender': 'Male',
        'ip_address': '231.202.228.95',
        'avatar': 'https://robohash.org/optiovelitnisi.bmp?size=80x80&set=set2'
    }, {
        'id': 60,
        'first_name': 'Antonietta',
        'last_name': 'Manvell',
        'email': 'amanvell1n@woothemes.com',
        'gender': 'Female',
        'ip_address': '8.61.28.59',
        'avatar': 'https://robohash.org/pariaturcorporisconsectetur.bmp?size=80x80&set=set2'
    }, {
        'id': 61,
        'first_name': 'Hebert',
        'last_name': 'Yitzhok',
        'email': 'hyitzhok1o@virginia.edu',
        'gender': 'Male',
        'ip_address': '37.45.21.39',
        'avatar': 'https://robohash.org/etsuntcorrupti.bmp?size=80x80&set=set2'
    }, {
        'id': 62,
        'first_name': 'Wendy',
        'last_name': 'Jedrachowicz',
        'email': 'wjedrachowicz1p@weather.com',
        'gender': 'Female',
        'ip_address': '128.211.14.250',
        'avatar': 'https://robohash.org/providentdolordeleniti.bmp?size=80x80&set=set2'
    }, {
        'id': 63,
        'first_name': 'Demeter',
        'last_name': 'Lunam',
        'email': 'dlunam1q@typepad.com',
        'gender': 'Female',
        'ip_address': '2.133.181.56',
        'avatar': 'https://robohash.org/doloremeumminus.bmp?size=80x80&set=set2'
    }, {
        'id': 64,
        'first_name': 'Scot',
        'last_name': 'Atte-Stone',
        'email': 'sattestone1r@vimeo.com',
        'gender': 'Male',
        'ip_address': '65.100.222.22',
        'avatar': 'https://robohash.org/harumdeseruntratione.bmp?size=80x80&set=set2'
    }, {
        'id': 65,
        'first_name': 'Averill',
        'last_name': 'Maides',
        'email': 'amaides1s@nyu.edu',
        'gender': 'Male',
        'ip_address': '166.82.61.42',
        'avatar': 'https://robohash.org/nullasuscipitdebitis.bmp?size=80x80&set=set2'
    }, {
        'id': 66,
        'first_name': 'Venita',
        'last_name': 'Du Fray',
        'email': 'vdufray1t@imgur.com',
        'gender': 'Female',
        'ip_address': '42.223.124.209',
        'avatar': 'https://robohash.org/adipiscilaboriosamlibero.bmp?size=80x80&set=set2'
    }, {
        'id': 67,
        'first_name': 'Hillie',
        'last_name': 'Keegan',
        'email': 'hkeegan1u@ow.ly',
        'gender': 'Male',
        'ip_address': '175.162.216.82',
        'avatar': 'https://robohash.org/estnullain.bmp?size=80x80&set=set2'
    }, {
        'id': 68,
        'first_name': 'Tiebold',
        'last_name': 'Dyett',
        'email': 'tdyett1v@smugmug.com',
        'gender': 'Male',
        'ip_address': '136.252.190.249',
        'avatar': 'https://robohash.org/quinostrumsaepe.bmp?size=80x80&set=set2'
    }, {
        'id': 69,
        'first_name': 'Krispin',
        'last_name': 'Birts',
        'email': 'kbirts1w@soundcloud.com',
        'gender': 'Male',
        'ip_address': '38.250.246.81',
        'avatar': 'https://robohash.org/autdoloribusadipisci.bmp?size=80x80&set=set2'
    }, {
        'id': 70,
        'first_name': 'Nikolas',
        'last_name': 'Thiem',
        'email': 'nthiem1x@baidu.com',
        'gender': 'Male',
        'ip_address': '94.99.57.190',
        'avatar': 'https://robohash.org/enimsintmagni.bmp?size=80x80&set=set2'
    }, {
        'id': 71,
        'first_name': 'Malissa',
        'last_name': 'Nutley',
        'email': 'mnutley1y@dell.com',
        'gender': 'Female',
        'ip_address': '151.218.26.16',
        'avatar': 'https://robohash.org/voluptatemsequiincidunt.bmp?size=80x80&set=set2'
    }, {
        'id': 72,
        'first_name': 'Helenelizabeth',
        'last_name': 'Kochlin',
        'email': 'hkochlin1z@oracle.com',
        'gender': 'Female',
        'ip_address': '195.118.146.65',
        'avatar': 'https://robohash.org/quiadebitisodit.bmp?size=80x80&set=set2'
    }, {
        'id': 73,
        'first_name': 'Hamish',
        'last_name': 'Bessell',
        'email': 'hbessell20@gmpg.org',
        'gender': 'Male',
        'ip_address': '231.250.131.184',
        'avatar': 'https://robohash.org/voluptatemminuset.bmp?size=80x80&set=set2'
    }, {
        'id': 74,
        'first_name': 'Dario',
        'last_name': 'Viscovi',
        'email': 'dviscovi21@wikipedia.org',
        'gender': 'Male',
        'ip_address': '3.245.124.128',
        'avatar': 'https://robohash.org/voluptatemvitaeaperiam.bmp?size=80x80&set=set2'
    }, {
        'id': 75,
        'first_name': 'Tucky',
        'last_name': 'Tacon',
        'email': 'ttacon22@gnu.org',
        'gender': 'Male',
        'ip_address': '239.66.218.162',
        'avatar': 'https://robohash.org/maximeporropariatur.bmp?size=80x80&set=set2'
    }, {
        'id': 76,
        'first_name': 'Carny',
        'last_name': 'Allpress',
        'email': 'callpress23@aol.com',
        'gender': 'Male',
        'ip_address': '133.234.229.232',
        'avatar': 'https://robohash.org/istequaeratnam.bmp?size=80x80&set=set2'
    }, {
        'id': 77,
        'first_name': 'Alexandre',
        'last_name': 'Gerler',
        'email': 'agerler24@state.gov',
        'gender': 'Male',
        'ip_address': '148.242.153.196',
        'avatar': 'https://robohash.org/nonveniamenim.bmp?size=80x80&set=set2'
    }, {
        'id': 78,
        'first_name': 'Lorne',
        'last_name': 'Brightie',
        'email': 'lbrightie25@bravesites.com',
        'gender': 'Male',
        'ip_address': '90.88.239.33',
        'avatar': 'https://robohash.org/autquiaminima.bmp?size=80x80&set=set2'
    }, {
        'id': 79,
        'first_name': 'Katlin',
        'last_name': 'Pods',
        'email': 'kpods26@github.io',
        'gender': 'Female',
        'ip_address': '31.126.212.5',
        'avatar': 'https://robohash.org/dictanonmolestias.bmp?size=80x80&set=set2'
    }, {
        'id': 80,
        'first_name': 'Sheilakathryn',
        'last_name': 'Kingsley',
        'email': 'skingsley27@xinhuanet.com',
        'gender': 'Female',
        'ip_address': '29.170.106.36',
        'avatar': 'https://robohash.org/deseruntipsaet.bmp?size=80x80&set=set2'
    }, {
        'id': 81,
        'first_name': 'Marian',
        'last_name': 'Vasiliev',
        'email': 'mvasiliev28@huffingtonpost.com',
        'gender': 'Female',
        'ip_address': '28.64.201.214',
        'avatar': 'https://robohash.org/necessitatibusdolorumsed.bmp?size=80x80&set=set2'
    }, {
        'id': 82,
        'first_name': 'Cathy',
        'last_name': 'Ovid',
        'email': 'covid29@exblog.jp',
        'gender': 'Female',
        'ip_address': '180.213.217.114',
        'avatar': 'https://robohash.org/laudantiumquibusdamqui.bmp?size=80x80&set=set2'
    }, {
        'id': 83,
        'first_name': 'Meredith',
        'last_name': 'Duinbleton',
        'email': 'mduinbleton2a@netlog.com',
        'gender': 'Female',
        'ip_address': '219.114.35.94',
        'avatar': 'https://robohash.org/deseruntsedcupiditate.bmp?size=80x80&set=set2'
    }, {
        'id': 84,
        'first_name': 'Sybille',
        'last_name': 'Muehler',
        'email': 'smuehler2b@go.com',
        'gender': 'Female',
        'ip_address': '210.136.142.45',
        'avatar': 'https://robohash.org/vitaecorporisanimi.bmp?size=80x80&set=set2'
    }, {
        'id': 85,
        'first_name': 'Mathias',
        'last_name': 'Cottey',
        'email': 'mcottey2c@paginegialle.it',
        'gender': 'Male',
        'ip_address': '91.95.254.33',
        'avatar': 'https://robohash.org/voluptatemquiaut.bmp?size=80x80&set=set2'
    }, {
        'id': 86,
        'first_name': 'Oswell',
        'last_name': 'O\'Towey',
        'email': 'ootowey2d@unc.edu',
        'gender': 'Male',
        'ip_address': '171.116.10.41',
        'avatar': 'https://robohash.org/beataelaboriosamqui.bmp?size=80x80&set=set2'
    }, {
        'id': 87,
        'first_name': 'Linet',
        'last_name': 'Stockey',
        'email': 'lstockey2e@loc.gov',
        'gender': 'Female',
        'ip_address': '115.187.91.216',
        'avatar': 'https://robohash.org/abvoluptatematque.bmp?size=80x80&set=set2'
    }, {
        'id': 88,
        'first_name': 'Niko',
        'last_name': 'Schettini',
        'email': 'nschettini2f@soup.io',
        'gender': 'Male',
        'ip_address': '100.192.205.155',
        'avatar': 'https://robohash.org/consequunturmolestiaeofficiis.bmp?size=80x80&set=set2'
    }, {
        'id': 89,
        'first_name': 'Tabbatha',
        'last_name': 'Renals',
        'email': 'trenals2g@mail.ru',
        'gender': 'Female',
        'ip_address': '108.136.175.175',
        'avatar': 'https://robohash.org/consequunturerrorquo.bmp?size=80x80&set=set2'
    }, {
        'id': 90,
        'first_name': 'Tildie',
        'last_name': 'Duligall',
        'email': 'tduligall2h@adobe.com',
        'gender': 'Female',
        'ip_address': '156.143.128.202',
        'avatar': 'https://robohash.org/temporatemporeodit.bmp?size=80x80&set=set2'
    }, {
        'id': 91,
        'first_name': 'Maxwell',
        'last_name': 'Dreakin',
        'email': 'mdreakin2i@cargocollective.com',
        'gender': 'Male',
        'ip_address': '184.207.27.49',
        'avatar': 'https://robohash.org/officiissuntmagni.bmp?size=80x80&set=set2'
    }, {
        'id': 92,
        'first_name': 'Evangelia',
        'last_name': 'Blay',
        'email': 'eblay2j@is.gd',
        'gender': 'Female',
        'ip_address': '152.26.43.94',
        'avatar': 'https://robohash.org/liberoetsoluta.bmp?size=80x80&set=set2'
    }, {
        'id': 93,
        'first_name': 'Giorgia',
        'last_name': 'Sprulls',
        'email': 'gsprulls2k@discuz.net',
        'gender': 'Female',
        'ip_address': '110.67.232.179',
        'avatar': 'https://robohash.org/modivoluptasomnis.bmp?size=80x80&set=set2'
    }, {
        'id': 94,
        'first_name': 'Tye',
        'last_name': 'Yarnall',
        'email': 'tyarnall2l@army.mil',
        'gender': 'Male',
        'ip_address': '211.118.176.25',
        'avatar': 'https://robohash.org/odioquiaest.bmp?size=80x80&set=set2'
    }, {
        'id': 95,
        'first_name': 'Mildred',
        'last_name': 'Samson',
        'email': 'msamson2m@hatena.ne.jp',
        'gender': 'Female',
        'ip_address': '52.81.96.35',
        'avatar': 'https://robohash.org/minusperspiciatiseos.bmp?size=80x80&set=set2'
    }, {
        'id': 96,
        'first_name': 'Willamina',
        'last_name': 'Fydo',
        'email': 'wfydo2n@wiley.com',
        'gender': 'Female',
        'ip_address': '128.186.61.87',
        'avatar': 'https://robohash.org/autemessein.bmp?size=80x80&set=set2'
    }, {
        'id': 97,
        'first_name': 'Helli',
        'last_name': 'Toombes',
        'email': 'htoombes2o@sina.com.cn',
        'gender': 'Female',
        'ip_address': '209.174.166.254',
        'avatar': 'https://robohash.org/etadipisciconsequuntur.bmp?size=80x80&set=set2'
    }, {
        'id': 98,
        'first_name': 'Natale',
        'last_name': 'Sorbie',
        'email': 'nsorbie2p@ox.ac.uk',
        'gender': 'Male',
        'ip_address': '73.64.66.152',
        'avatar': 'https://robohash.org/quiaeumsit.bmp?size=80x80&set=set2'
    }, {
        'id': 99,
        'first_name': 'Doy',
        'last_name': 'Heersma',
        'email': 'dheersma2q@skyrock.com',
        'gender': 'Male',
        'ip_address': '97.244.55.226',
        'avatar': 'https://robohash.org/explicabovoluptasveritatis.bmp?size=80x80&set=set2'
    }, {
        'id': 100,
        'first_name': 'Hollie',
        'last_name': 'McKay',
        'email': 'hmckay2r@prlog.org',
        'gender': 'Female',
        'ip_address': '70.76.128.223',
        'avatar': 'https://robohash.org/voluptatemautconsectetur.bmp?size=80x80&set=set2'
    }];
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer-panel/footer-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer-content container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\"><img src=\"http://apareciumlabs.com/assets/images/angular-logo.svg\" alt=\"\"></div>\n      <div class=\"col-sm-8\">\n        <p class=\"power-text\">Coded with &hearts; by Anuradha Gunasekara ©2017. Code licensed under an\n          <a href=\"https://github.com/sanuradhag/angular-switchable-grid/blob/master/LICENSE\" target=\"_blank\">MIT\n            License</a>.</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer-panel/footer-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "/*!\n\n =========================================================\n * Angular Switchable Grid 2 - Version 1.0.7\n =========================================================\n\n * Demo Page: https://sanuradhag.github.io/angular-switchable-grid/\n * GitHub Repo: https://github.com/sanuradhag/angular-switchable-grid\n * Link to npm: https://www.npmjs.com/package/angular-switchable-grid\n\n =========================================================\n\n * Licensed under MIT\n\n */\n/* GOOGLE MATERIAL DESIGN colors pack */\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n\n.flaticon-gear:before {\n  content: \"\\F100\"; }\n\n.flaticon-github-logo:before {\n  content: \"\\F101\"; }\n\n.flaticon-filter-1:before {\n  content: \"\\F102\"; }\n\n.flaticon-filter:before {\n  content: \"\\F103\"; }\n\n.flaticon-black:before {\n  content: \"\\F104\"; }\n\n.flaticon-arrows-10:before {\n  content: \"\\F105\"; }\n\n.flaticon-expand-button:before {\n  content: \"\\F106\"; }\n\n.flaticon-drop-down-arrow:before {\n  content: \"\\F107\"; }\n\n.flaticon-go-back-left-arrow:before {\n  content: \"\\F108\"; }\n\n.flaticon-arrows-9:before {\n  content: \"\\F109\"; }\n\n.flaticon-arrows-7:before {\n  content: \"\\F10A\"; }\n\n.flaticon-arrows-8:before {\n  content: \"\\F10B\"; }\n\n.flaticon-interface-2:before {\n  content: \"\\F10C\"; }\n\n.flaticon-load:before {\n  content: \"\\F10D\"; }\n\n.flaticon-arrows-6:before {\n  content: \"\\F10E\"; }\n\n.flaticon-arrows-5:before {\n  content: \"\\F10F\"; }\n\n.flaticon-arrows-4:before {\n  content: \"\\F110\"; }\n\n.flaticon-web:before {\n  content: \"\\F111\"; }\n\n.flaticon-left-arrow-key:before {\n  content: \"\\F112\"; }\n\n.flaticon-add-plus-button:before {\n  content: \"\\F113\"; }\n\n.flaticon-mark-as-favorite-star:before {\n  content: \"\\F114\"; }\n\n.flaticon-searching-magnifying-glass:before {\n  content: \"\\F115\"; }\n\n.flaticon-close-button:before {\n  content: \"\\F116\"; }\n\n.flaticon-check-symbol:before {\n  content: \"\\F117\"; }\n\n.flaticon-back-arrow:before {\n  content: \"\\F118\"; }\n\n.flaticon-keyboard-right-arrow-button:before {\n  content: \"\\F119\"; }\n\n.flaticon-arrows-3:before {\n  content: \"\\F11A\"; }\n\n.flaticon-upload:before {\n  content: \"\\F11B\"; }\n\n.flaticon-long-arrow-pointing-up:before {\n  content: \"\\F11C\"; }\n\n.flaticon-arrows-2:before {\n  content: \"\\F11D\"; }\n\n.flaticon-arrows-1:before {\n  content: \"\\F11E\"; }\n\n.flaticon-arrows:before {\n  content: \"\\F11F\"; }\n\n.flaticon-app:before {\n  content: \"\\F120\"; }\n\n.flaticon-interface-1:before {\n  content: \"\\F121\"; }\n\n.flaticon-squares:before {\n  content: \"\\F122\"; }\n\n.flaticon-interface:before {\n  content: \"\\F123\"; }\n\n/** Material design flat button styles **/\n.md-btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all .15s ease-in-out;\n  -o-transition: all .15s ease-in-out;\n  -moz-transition: all .15s ease-in-out;\n  -webkit-transition: all .15s ease-in-out; }\n  .md-btn:focus, .md-btn:active, .md-btn.active, .md-btn:active:focus, .md-btn.active:focus {\n    outline: 0;\n    outline-offset: 0;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none; }\n\n.btn-flat-default {\n  background-color: transparent;\n  border: 1px solid #212121; }\n  .btn-flat-default:hover, .btn-flat-default:active {\n    background-color: #d4d3d3; }\n  .btn-flat-default:disabled, .btn-flat-default.disabled, .btn-flat-default[disabled] {\n    background-color: #e0e0e0; }\n  .btn-flat-default .ink {\n    background-color: white; }\n\n/** Footer styling **/\nfooter {\n  background-color: #263238; }\n  footer .footer-content {\n    padding: 12px 35px; }\n    footer .footer-content .power-text {\n      font-family: 'Roboto', sans-serif;\n      font-weight: 300;\n      font-size: 12px;\n      color: #ffffff;\n      margin: 0;\n      opacity: .54;\n      text-align: right;\n      padding: 10px 0; }\n      footer .footer-content .power-text a {\n        color: #ffffff;\n        font-weight: 400;\n        text-decoration: none; }\n\n@media only screen and (max-width: 768px) {\n  footer {\n    text-align: center; }\n    footer .power-text {\n      text-align: center !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer-panel/footer-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterPanelComponent = (function () {
    function FooterPanelComponent() {
    }
    FooterPanelComponent.prototype.ngOnInit = function () {
    };
    return FooterPanelComponent;
}());
FooterPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'footer-panel',
        template: __webpack_require__("../../../../../src/app/shared/footer-panel/footer-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer-panel/footer-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterPanelComponent);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/footer-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header-panel/header-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/example']\">\n        <img src=\"http://apareciumlabs.com/assets/images/angular-logo.svg\" alt=\"Angular\"/>\n        <span class=\"project-name\">Switchable Grid</span><br>\n        <span class=\"version\">Version {{version}}</span>\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <!--<li><a [routerLink]=\"['/get-started']\">Get Started</a></li>-->\n        <!--<li><a [routerLink]=\"['/style-guide']\">Style Guide</a></li>-->\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a target=\"_blank\" href=\"https://github.com/sanuradhag/angular-switchable-grid\"><span class=\"github\"><i\n          class=\"flaticon-github-logo\"></i></span>Github</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/header-panel/header-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../bootstrap/dist/css/bootstrap.min.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "/*!\n\n =========================================================\n * Angular Switchable Grid 2 - Version 1.0.7\n =========================================================\n\n * Demo Page: https://sanuradhag.github.io/angular-switchable-grid/\n * GitHub Repo: https://github.com/sanuradhag/angular-switchable-grid\n * Link to npm: https://www.npmjs.com/package/angular-switchable-grid\n\n =========================================================\n\n * Licensed under MIT\n\n */\n/* GOOGLE MATERIAL DESIGN colors pack */\n[class^=\"flaticon-\"]:before,\n[class*=\" flaticon-\"]:before,\n[class^=\"flaticon-\"]:after,\n[class*=\" flaticon-\"]:after {\n  font-family: Flaticon;\n  font-size: 24px;\n  font-style: normal; }\n\n.flaticon-gear:before {\n  content: \"\\F100\"; }\n\n.flaticon-github-logo:before {\n  content: \"\\F101\"; }\n\n.flaticon-filter-1:before {\n  content: \"\\F102\"; }\n\n.flaticon-filter:before {\n  content: \"\\F103\"; }\n\n.flaticon-black:before {\n  content: \"\\F104\"; }\n\n.flaticon-arrows-10:before {\n  content: \"\\F105\"; }\n\n.flaticon-expand-button:before {\n  content: \"\\F106\"; }\n\n.flaticon-drop-down-arrow:before {\n  content: \"\\F107\"; }\n\n.flaticon-go-back-left-arrow:before {\n  content: \"\\F108\"; }\n\n.flaticon-arrows-9:before {\n  content: \"\\F109\"; }\n\n.flaticon-arrows-7:before {\n  content: \"\\F10A\"; }\n\n.flaticon-arrows-8:before {\n  content: \"\\F10B\"; }\n\n.flaticon-interface-2:before {\n  content: \"\\F10C\"; }\n\n.flaticon-load:before {\n  content: \"\\F10D\"; }\n\n.flaticon-arrows-6:before {\n  content: \"\\F10E\"; }\n\n.flaticon-arrows-5:before {\n  content: \"\\F10F\"; }\n\n.flaticon-arrows-4:before {\n  content: \"\\F110\"; }\n\n.flaticon-web:before {\n  content: \"\\F111\"; }\n\n.flaticon-left-arrow-key:before {\n  content: \"\\F112\"; }\n\n.flaticon-add-plus-button:before {\n  content: \"\\F113\"; }\n\n.flaticon-mark-as-favorite-star:before {\n  content: \"\\F114\"; }\n\n.flaticon-searching-magnifying-glass:before {\n  content: \"\\F115\"; }\n\n.flaticon-close-button:before {\n  content: \"\\F116\"; }\n\n.flaticon-check-symbol:before {\n  content: \"\\F117\"; }\n\n.flaticon-back-arrow:before {\n  content: \"\\F118\"; }\n\n.flaticon-keyboard-right-arrow-button:before {\n  content: \"\\F119\"; }\n\n.flaticon-arrows-3:before {\n  content: \"\\F11A\"; }\n\n.flaticon-upload:before {\n  content: \"\\F11B\"; }\n\n.flaticon-long-arrow-pointing-up:before {\n  content: \"\\F11C\"; }\n\n.flaticon-arrows-2:before {\n  content: \"\\F11D\"; }\n\n.flaticon-arrows-1:before {\n  content: \"\\F11E\"; }\n\n.flaticon-arrows:before {\n  content: \"\\F11F\"; }\n\n.flaticon-app:before {\n  content: \"\\F120\"; }\n\n.flaticon-interface-1:before {\n  content: \"\\F121\"; }\n\n.flaticon-squares:before {\n  content: \"\\F122\"; }\n\n.flaticon-interface:before {\n  content: \"\\F123\"; }\n\n/** Material design flat button styles **/\n.md-btn {\n  outline: 0;\n  outline-offset: 0;\n  border: 0;\n  border-radius: 2px;\n  transition: all .15s ease-in-out;\n  -o-transition: all .15s ease-in-out;\n  -moz-transition: all .15s ease-in-out;\n  -webkit-transition: all .15s ease-in-out; }\n  .md-btn:focus, .md-btn:active, .md-btn.active, .md-btn:active:focus, .md-btn.active:focus {\n    outline: 0;\n    outline-offset: 0;\n    box-shadow: none;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none; }\n\n.btn-flat-default {\n  background-color: transparent;\n  border: 1px solid #212121; }\n  .btn-flat-default:hover, .btn-flat-default:active {\n    background-color: #d4d3d3; }\n  .btn-flat-default:disabled, .btn-flat-default.disabled, .btn-flat-default[disabled] {\n    background-color: #e0e0e0; }\n  .btn-flat-default .ink {\n    background-color: white; }\n\n.navbar {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: 500;\n  border-radius: 0;\n  padding-top: 5px;\n  margin-bottom: 0;\n  min-height: 65px;\n  background-color: #263238;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n  .navbar .navbar-brand img {\n    float: left;\n    margin: -10px 10px 0 10px; }\n  .navbar .navbar-brand span.project-name {\n    color: #ffffff;\n    float: right; }\n  .navbar .navbar-brand span.version {\n    font-size: 10px;\n    float: right;\n    margin-right: 3px;\n    margin-top: -3px; }\n  .navbar .navbar-collapse ul li {\n    font-size: 16px; }\n    .navbar .navbar-collapse ul li .github i {\n      padding: 0 10px; }\n\n@media only screen and (max-width: 440px) {\n  .navbar-brand .project-name {\n    display: none; }\n  .navbar-brand .version {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header-panel/header-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderPanelComponent = (function () {
    function HeaderPanelComponent() {
        this.version = '1.0.10';
    }
    HeaderPanelComponent.prototype.ngOnInit = function () {
    };
    return HeaderPanelComponent;
}());
HeaderPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'header-panel',
        template: __webpack_require__("../../../../../src/app/shared/header-panel/header-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header-panel/header-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderPanelComponent);

//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/header-panel.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/anurada/Documents/myProjects/github/angular-switchable-grid/master/angular-switchable-grid/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map