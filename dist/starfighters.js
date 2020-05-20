"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Millenium = void 0;
var base_ships_1 = require("./base-ships");
//Criando classe extendendo da Spacecraft
var Millenium = /** @class */ (function (_super) {
    __extends(Millenium, _super);
    function Millenium() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainer = 3;
        return _this;
    }
    Millenium.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return Millenium;
}(base_ships_1.Spacecraft));
exports.Millenium = Millenium;
