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
exports.DemoService = void 0;
const decorator_1 = require("@midwayjs/decorator");
let DemoService = class DemoService {
    async execute() {
        console.log(this.ctx);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], DemoService.prototype, "ctx", void 0);
DemoService = __decorate([
    decorator_1.Provide()
], DemoService);
exports.DemoService = DemoService;
//# sourceMappingURL=demo.js.map