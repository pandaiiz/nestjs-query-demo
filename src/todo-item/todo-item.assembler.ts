import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';
import { TodoItemDTO } from './todo-item.dto';
import { TodoItemEntity } from './todo-item.entity';

// `@Assembler` decorator will register the assembler with `nestjs-query` and
// the QueryService service will be able to auto discover it.
@Assembler(TodoItemDTO, TodoItemEntity)
export class TodoItemAssembler extends ClassTransformerAssembler<
  TodoItemDTO,
  TodoItemEntity
> {
  convertToDTO(entity: TodoItemEntity): TodoItemDTO {
    const dto = super.convertToDTO(entity);
    // compute the age
    // dto.age = Date.now() - entity.created.getMilliseconds();
    return dto;
  }
}
