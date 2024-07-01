import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { FirebaseService } from 'src/firebase/firebase.service';
import { Todo } from './entities/todo.entity';
import { FiltersArgs } from './dto/args/filters.args';
import { StatusEnum } from './dto/types/Status.enum';

@Injectable()
export class TodoService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const db = this.firebaseService.getDatabase();
    const ref = db.ref('todos');
    const newTodo = ref.push();
    await newTodo.set({
      ...createTodoInput,
      dueDate: new Date().getTime(),
    });
    return { id: newTodo.key, ...createTodoInput };
  }

  async findAll({ page = 1, status }: FiltersArgs): Promise<Todo[]> {
    const pageSize = 10;
    const startAtKey = (page - 1) * pageSize;
    const db = this.firebaseService.getDatabase();
    const query = db
      .ref('todos')
      .orderByKey()
      .limitToFirst(pageSize + startAtKey);
    const snapshot = await query.once('value');
    const todos: Todo[] = [];
    snapshot.forEach((child) => {
      todos.push({
        id: child.key,
        ...child.val(),
        dueDate: new Date(child.val().dueDate),
      });
    });
    if (status) {
      return todos
        .slice(startAtKey)
        .filter((todo) => todo.status === (status === StatusEnum.COMPLETED));
    }
    return todos.slice(startAtKey);
  }

  async findOne(id: string): Promise<Todo> {
    const db = this.firebaseService.getDatabase();
    const ref = db.ref(`todos/${id}`);
    const todo = await ref.once('value');
    if (!todo.exists()) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return {
      id: todo.key,
      ...todo.val(),
      dueDate: new Date(todo.val().dueDate),
    };
  }

  async update(id: string, updateTodoInput: UpdateTodoInput) {
    const todo = await this.findOne(id);
    const db = this.firebaseService.getDatabase();
    await db.ref(`todos/${id}`).set({
      ...todo,
      ...updateTodoInput,
      dueDate: updateTodoInput.dueDate
        ? new Date(updateTodoInput.dueDate).getTime()
        : todo.dueDate.getTime(),
    });
    const snapshot = await db.ref(`todos/${id}`).once('value');
    const updatedItem = snapshot.val();
    return {
      id,
      ...updatedItem,
      dueDate: new Date(updatedItem.dueDate),
    };
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    const db = this.firebaseService.getDatabase();
    await db.ref(`todos/${id}`).remove();
    return todo;
  }
}
