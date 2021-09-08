"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WechatConfiguration = void 0;
const decorator_1 = require("@midwayjs/decorator");
const path_1 = require("path");
let WechatConfiguration = class WechatConfiguration {
    async onReady(content) {
        this.app.setAttr('DEMO', true);
    }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", Object)
], WechatConfiguration.prototype, "app", void 0);
__decorate([
    decorator_1.Logger(),
    __metadata("design:type", Object)
], WechatConfiguration.prototype, "coreLogger", void 0);
WechatConfiguration = __decorate([
    decorator_1.Configuration({
        namespace: 'DEMO',
        importConfigs: [
            path_1.join(__dirname, 'config')
        ]
    })
], WechatConfiguration);
exports.WechatConfiguration = WechatConfiguration;
//# sourceMappingURL=configuration.js.map