/*
  Warnings:

  - You are about to drop the column `task` on the `task` table. All the data in the column will be lost.
  - The `status` column on the `task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `description` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('unfulfilled', 'inProgress', 'complited');

-- AlterTable
ALTER TABLE "task" DROP COLUMN "task",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "status",
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'inProgress';

-- DropEnum
DROP TYPE "taskStatus";
