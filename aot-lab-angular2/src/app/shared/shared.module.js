var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule, } from '@angular/flex-layout';
import { CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule, CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule, CovalentCommonModule, CovalentDialogsModule } from '@covalent/core';
import { MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdTooltipModule, MdSlideToggleModule, MdInputModule, MdCheckboxModule, MdToolbarModule, MdSnackBarModule, MdSidenavModule, MdTabsModule, MdSelectModule, MdNativeDateModule, MdDatepickerModule } from '@angular/material';
var FLEX_LAYOUT_MODULES = [
    FlexLayoutModule
];
var ANGULAR_MODULES = [
    FormsModule, ReactiveFormsModule
];
var MATERIAL_MODULES = [
    MdButtonModule, MdCardModule, MdIconModule,
    MdListModule, MdMenuModule, MdTooltipModule,
    MdSlideToggleModule, MdInputModule, MdCheckboxModule,
    MdToolbarModule, MdSnackBarModule, MdSidenavModule,
    MdTabsModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule
];
var COVALENT_MODULES = [
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule
];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ANGULAR_MODULES,
            MATERIAL_MODULES,
            COVALENT_MODULES,
            FLEX_LAYOUT_MODULES
        ],
        declarations: [],
        exports: [
            ANGULAR_MODULES,
            MATERIAL_MODULES,
            COVALENT_MODULES,
            FLEX_LAYOUT_MODULES
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map