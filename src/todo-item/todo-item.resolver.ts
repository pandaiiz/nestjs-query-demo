import { Filter, InjectQueryService, QueryService } from '@nestjs-query/core';
import { ConnectionType } from '@nestjs-query/query-graphql';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';
import { TodoItemConnection, TodoItemQuery } from './type';
import { TodoItemService } from './todo-item.service';

@Resolver(() => TodoItemDTO)
export class TodoItemResolver {
  constructor(
    @InjectQueryService(TodoItemEntity)
    readonly service: TodoItemService,
  ) {}

  // use custom service ⬆️
  // readonly service: QueryService<TodoItemEntity>,

  // Set the return type to the TodoItemConnection
  @Query(() => TodoItemConnection)
  completedTodoItems(
    @Args() query: TodoItemQuery,
  ): Promise<ConnectionType<TodoItemDTO>> {
    // add the completed filter the user provided filter
    const filter: Filter<TodoItemDTO> = {
      ...query.filter,
      ...{ completed: { is: true } },
    };

    this.service.markAllAsCompleted();
    return TodoItemConnection.createFromPromise((q) => this.service.query(q), {
      ...query,
      ...{ filter },
    });
  }
}
