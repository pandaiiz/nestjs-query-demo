```bash
npm install
docker-compose up -d
npm run start:dev
```
### apollo-server-express版本问题
需要使用apollo-server-express@^2的版本才可运行成功，最新的^3版本会有报错

### resolver组装器
通过assembler和type.ts中的方法将curd resolver和custom resolver组合起来，即可实现自定义的接口+单个entity的curd接口，curd生成的接口包含以下几种：
- todoItem - Find a single TodoItem by id.
- todoItems - Filter, sort, and page TodoItems
- createOneTodoItem - Create a single TodoItem
- createManyTodoItems - Create multiple TodoItems.
- updateOneTodoItem - Update a single TodoItem by id.
- updateManyTodoItems - Update multiple TodoItems using a filter.
- deleteOneTodoItem - Delete a single TodoItem by id.
- deleteManyTodoItems - Delete multiple TodoItems using a filter.


具体请参照https://doug-martin.github.io/nestjs-query/docs/graphql/resolvers