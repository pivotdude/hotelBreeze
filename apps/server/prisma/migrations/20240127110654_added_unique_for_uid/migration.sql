/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_uid_key" ON "Post"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Role_uid_key" ON "Role"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User_uid_key" ON "User"("uid");
