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
exports.DemoController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const demo_1 = require("../service/demo");
let DemoController = class DemoController {
    // @Inject('DEMO:demoService')// 这样注入，demoService中的ctx才有值
    // demoService;
    async test() {
        await this.demoService.execute();
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], DemoController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject() // 这样注入，demoService中的ctx为undefined
    ,
    __metadata("design:type", demo_1.DemoService)
], DemoController.prototype, "demoService", void 0);
__decorate([
    decorator_1.Get('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DemoController.prototype, "test", null);
DemoController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/')
], DemoController);
exports.DemoController = DemoController;
//# sourceMappingURL=demo.js.map