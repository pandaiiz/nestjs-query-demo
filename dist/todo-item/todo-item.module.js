"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemModule = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const todo_item_dto_1 = require("./todo-item.dto");
const todo_item_assembler_1 = require("./todo-item.assembler");
const todo_item_entity_1 = require("./todo-item.entity");
const todo_item_resolver_1 = require("./todo-item.resolver");
let TodoItemModule = class TodoItemModule {
};
TodoItemModule = __decorate([
    (0, common_1.Module)({
        providers: [todo_item_resolver_1.TodoItemResolver],
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([todo_item_entity_1.TodoItemEntity])],
                assemblers: [todo_item_assembler_1.TodoItemAssembler],
                resolvers: [
                    {
                        DTOClass: todo_item_dto_1.TodoItemDTO,
                        EntityClass: todo_item_entity_1.TodoItemEntity,
                    },
                ],
            }),
        ],
    })
], TodoItemModule);
exports.TodoItemModule = TodoItemModule;
//# sourceMappingURL=todo-item.module.js.map