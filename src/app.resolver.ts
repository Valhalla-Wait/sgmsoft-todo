import { Query, Resolver } from "@nestjs/graphql";
import { Task } from "./app.model";
import {AppService} from './app.service'


@Resolver(Task)
export class TasksResolver {
    constructor(private readonly taskService: AppService) {}

    @Query(() =>[Task])
    async getTasks() {
        return this.taskService.getTask()
    }
}