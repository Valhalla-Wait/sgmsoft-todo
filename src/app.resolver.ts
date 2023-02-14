import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTaskInput, Task, IDTaskInput,UpdateTaskInput,filterTaskInput } from "./app.model";
import {AppService} from './app.service'


@Resolver(Task)
export class TasksResolver {
    constructor(private readonly taskService: AppService) {}

    @Query(() =>[Task])
    async getTasks() {
        return this.taskService.getTasks()
    }

    @Query(() =>Task)
    async getTask(@Args('IDTaskData') IDTaskData: IDTaskInput) {
        return this.taskService.getTask(IDTaskData)
    }

    @Query(() =>[Task])
    async filterTask(@Args('filterData') filterTaskData: filterTaskInput) {
        return this.taskService.filterTask(filterTaskData)
    }

    @Mutation(() => Task)
    async createTask(@Args('createTaskData') createTaskData: CreateTaskInput) {
        return this.taskService.createTask(createTaskData)
    }

    @Mutation(() => Task)
    async deleteTask(@Args('deleteTaskData') deleteTaskData: IDTaskInput) {
        return this.taskService.deleteTask(deleteTaskData)
    }

    @Mutation(() => Task)
    async updateTask(@Args('updateTaskData',) updateTaskData: UpdateTaskInput,) {
        return this.taskService.updateTask(updateTaskData)
    }
}