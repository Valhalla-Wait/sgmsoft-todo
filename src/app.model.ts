import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: number;

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  expires: Date

  @Field()
  isCompleted: boolean

  @Field()
  status: string

  @Field()
  createdAt: Date
  
  @Field()
  updatedAt: Date
}

@InputType()
export class CreateTaskInput {
    @Field()
    name: string
  
    @Field()
    description: string
  
    @Field()
    expires: Date
}