import { CacheModule, Module } from '@nestjs/common';
import { AppService } from './core/task/app.service';
import { PrismaService } from './Database/prisma.service';
import { PrismaModule } from './Database/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TasksResolver } from './core/task/app.resolver';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    PrismaModule,
    CacheModule.register({
      useFactory: () => ({
        isGlobal: true,
        store: redisStore,
        url: "redis://localhost:6379",
      })
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
    }),
  ],
  providers: [AppService, PrismaService, TasksResolver],
})
export class AppModule {}
