/*
  Warnings:

  - A unique constraint covering the columns `[userId,hotelId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_hotelId_key" ON "Favorite"("userId", "hotelId");
