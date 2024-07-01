import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => Boolean)
  status: boolean = false;

  @Field(() => Date)
  dueDate: Date;
}
