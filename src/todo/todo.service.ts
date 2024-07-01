import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { FirebaseService } from 'src/firebase/firebase.service';
import { Todo } from './entities/todo.entity';

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

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
