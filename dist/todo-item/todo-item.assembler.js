"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemAssembler = void 0;
const core_1 = require("@nestjs-query/core");
const todo_item_dto_1 = require("./todo-item.dto");
const todo_item_entity_1 = require("./todo-item.entity");
let TodoItemAssembler = class TodoItemAssembler extends core_1.ClassTransformerAssembler {
    convertToDTO(entity) {
        const dto = super.convertToDTO(entity);
        return dto;
    }
};
TodoItemAssembler = __decorate([
    (0, core_1.Assembler)(todo_item_dto_1.TodoItemDTO, todo_item_entity_1.TodoItemEntity)
], TodoItemAssembler);
exports.TodoItemAssembler = TodoItemAssembler;
//# sourceMappingURL=todo-item.assembler.js.map