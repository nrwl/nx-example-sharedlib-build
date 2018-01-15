import { NgModule, Component } from '@angular/core';
var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'shared',
                    template: 'SHARED3'
                },] },
    ];
    /** @nocollapse */
    SharedComponent.ctorParameters = function () { return []; };
    return SharedComponent;
}());
export { SharedComponent };
var SharedlibModule = /** @class */ (function () {
    function SharedlibModule() {
    }
    SharedlibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SharedComponent],
                    exports: [SharedComponent]
                },] },
    ];
    /** @nocollapse */
    SharedlibModule.ctorParameters = function () { return []; };
    return SharedlibModule;
}());
export { SharedlibModule };
