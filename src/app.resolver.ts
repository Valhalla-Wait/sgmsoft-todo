import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTaskInput, Task, DeleteTaskInput,UpdateTaskInput } from "./app.model";
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

    @Mutation(() => Task)
    async deleteTask(@Args('deleteTaskData') deleteTaskData: DeleteTaskInput) {
        return this.taskService.deleteTask(deleteTaskData)
    }

    @Mutation(() => Task)
    async updateTask(@Args('updateTaskData',) updateTaskData: UpdateTaskInput,) {
        return this.taskService.updateTask(updateTaskData)
    }
}