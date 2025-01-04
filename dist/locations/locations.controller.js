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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const create_location_dto_1 = require("../common/dto/create-location.dto");
let LocationsController = class LocationsController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    async create(createLocationDto) {
        return this.locationsService.create(createLocationDto);
    }
    async findAll() {
        return this.locationsService.findAll();
    }
    async findOne(location_name) {
        return this.locationsService.findOne(location_name);
    }
    async update(location_name, updateLocationDto) {
        return this.locationsService.update(location_name, updateLocationDto);
    }
    async remove(location_name) {
        return this.locationsService.remove(location_name);
    }
};
exports.LocationsController = LocationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_location_dto_1.CreateLocationDto]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':location_name'),
    __param(0, (0, common_1.Param)('location_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':location_name'),
    __param(0, (0, common_1.Param)('location_name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_location_dto_1.CreateLocationDto]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':location_name'),
    __param(0, (0, common_1.Param)('location_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "remove", null);
exports.LocationsController = LocationsController = __decorate([
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
//# sourceMappingURL=locations.controller.js.map