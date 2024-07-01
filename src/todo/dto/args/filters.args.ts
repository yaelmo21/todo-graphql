import { ArgsType, Field, Int } from '@nestjs/graphql';
import { StatusEnum } from '../types/Status.enum';
import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';

@ArgsType()
export class FiltersArgs {
  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  page?: number;

  @Field(() => String, { nullable: true })
  @IsEnum(StatusEnum)
  @IsOptional()
  status?: StatusEnum;
}
