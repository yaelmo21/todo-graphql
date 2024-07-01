import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id: string;
}
