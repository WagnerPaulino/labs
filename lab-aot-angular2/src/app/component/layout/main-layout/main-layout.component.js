var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from '@angular/router';
import { Component } from '@angular/core';
var MainLayoutComponent = (function () {
    function MainLayoutComponent(_router) {
        this._router = _router;
        this.routes = [{
                title: 'dashboard',
                route: '/',
                icon: 'dashboard',
            }
        ];
        this.userInfo = { email: '', family_name: '', given_name: '', name: '', preferred_username: '', sub: '' };
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent.prototype.logout = function () {
        this._router.navigate(['/']);
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    Component({
        selector: 'main-layout',
        templateUrl: './main-layout.component.html',
        styleUrls: ['./main-layout.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], MainLayoutComponent);
export { MainLayoutComponent };
//# sourceMappingURL=main-layout.component.js.map