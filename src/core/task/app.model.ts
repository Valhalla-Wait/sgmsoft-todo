import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TaskStatus} from "@prisma/client"

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

  @Field(type => TaskStatus)
   status:TaskStatus

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

@InputType()
export class IDTaskInput {
    @Field()
    id: number
}

@InputType()
export class filterTaskInput {
  @Field(type => TaskStatus)
   status:TaskStatus
}

@InputType()
export class UpdateTaskInput {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  expires: Date

  @Field(type => TaskStatus)
   status:TaskStatus //status
}
registerEnumType(TaskStatus, {
  name: 'TaskStatus',
});


// export enum status {
//   unfulfilled,
//   inProgress,
//   complited,
// }
