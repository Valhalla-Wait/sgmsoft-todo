-- CreateEnum
CREATE TYPE "taskStatus" AS ENUM ('unfulfilled', 'inProgress', 'complited');

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "status" "taskStatus" NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
