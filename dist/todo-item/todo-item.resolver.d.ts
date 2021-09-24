import { QueryService } from '@nestjs-query/core';
import { ConnectionType } from '@nestjs-query/query-graphql';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemQuery } from './type';
export declare class TodoItemResolver {
    readonly service: QueryService<TodoItemEntity>;
    constructor(service: QueryService<TodoItemEntity>);
    completedTodoItems(query: TodoItemQuery): Promise<ConnectionType<TodoItemDTO>>;
}
