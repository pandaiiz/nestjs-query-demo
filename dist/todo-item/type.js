"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemConnection = exports.TodoItemQuery = void 0;
const query_graphql_1 = require("@nestjs-query/query-graphql");
const graphql_1 = require("@nestjs/graphql");
const todo_item_dto_1 = require("./todo-item.dto");
let TodoItemQuery = class TodoItemQuery extends (0, query_graphql_1.QueryArgsType)(todo_item_dto_1.TodoItemDTO) {
};
TodoItemQuery = __decorate([
    (0, graphql_1.ArgsType)()
], TodoItemQuery);
exports.TodoItemQuery = TodoItemQuery;
exports.TodoItemConnection = TodoItemQuery.ConnectionType;
//# sourceMappingURL=type.js.map