import { CACHE_MANAGER, Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Cache } from "cache-manager";
import { CreateTaskInput, Task, IDTaskInput,UpdateTaskInput,filterTaskInput } from "./app.model";
import {AppService} from './app.service'


@Resolver(Task)
export class TasksResolver {
    constructor(private readonly taskService: AppService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    @Query(() =>[Task])
    async getTasks() {
        const cachedTasks = await this.cacheManager.get('tasks')

        if(cachedTasks) return cachedTasks

        const queryTasks = await this.taskService.getTasks()
        await this.cacheManager.set('tasks', queryTasks);

        return queryTasks
    }

    @Query(() =>Task)
    async getTask(@Args('IDTaskData') IDTaskData: IDTaskInput) {
        const cachedTask = await this.cacheManager.get('task')

        if(cachedTask) return cachedTask

        const queryTask = await this.taskService.getTask(IDTaskData)
        await this.cacheManager.set('task', queryTask);

        return queryTask
    }

    @Query(() =>[Task])
    async filterTask(@Args('filterData') filterTaskData: filterTaskInput) {
        const cachedFilterTask = await this.cacheManager.get('filterTask')

        if(cachedFilterTask) return cachedFilterTask

        const queryFilterTask = await this.taskService.filterTask(filterTaskData)
        await this.cacheManager.set('filterTask', queryFilterTask);

        return queryFilterTask
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