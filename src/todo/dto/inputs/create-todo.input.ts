import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, {
    description: 'The title of the todo',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @Field(() => String, {
    description: 'The description of the todo',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  @Field(() => Date, {
    description: 'The due date of the todo',
  })
  @IsNotEmpty()
  @Type(() => Date)
  dueDate: Date;

  @Field(() => Boolean, {
    description: 'The status of the todo',
  })
  @IsOptional()
  status: boolean = false;
}
