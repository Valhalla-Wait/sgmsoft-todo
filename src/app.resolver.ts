import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTaskInput, Task } from "./app.model";
import {AppService} from './app.service'


@Resolver(Task)
export class TasksResolver {
    constructor(private readonly taskService: AppService) {}

    @Query(() =>[Task])
    async getTasks() {
        return this.taskService.getTask()
    }

    @Mutation(() => Task)
    async createTask(@Args('createTaskData') createTaskData: CreateTaskInput) {
        return this.taskService.createTask(createTaskData)
    }
}