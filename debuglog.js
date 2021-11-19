"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Debuglog = void 0;
var Console = require('console').Console;
var util = require('util');
var Debuglog = /** @class */ (function (_super) {
    __extends(Debuglog, _super);
    function Debuglog(debugTag, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.color, color = _c === void 0 ? (function (v) { return v; }) : _c, _d = _b.target, target = _d === void 0 ? 'NODE_DEBUG' : _d;
        var option = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            option[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, __assign(__assign({}, option), { stdout: process.stdout })) || this;
        _this.debugTag = debugTag;
        _this.color = color;
        _this.target = target;
        return _this;
    }
    Debuglog.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var formatted = util.format.apply(util, args);
        if (process.env[this.target] === this.debugTag) {
            _super.prototype.log.call(this, this.color(formatted));
        }
        return formatted;
    };
    return Debuglog;
}(Console));
exports.Debuglog = Debuglog;
// TODO 나중에 멀티콘솔이나 RxJS랑 통합하기
