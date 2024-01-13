/*
  Warnings:

  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_bannerImageId_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_previewImageId_fkey";

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_bannerImageId_fkey";

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_previewImageId_fkey";

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_postId_fkey";

-- DropForeignKey
ALTER TABLE "Language" DROP CONSTRAINT "Language_avatarId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_avatarId_fkey";

-- DropIndex
DROP INDEX "User_avatarId_key";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "previewImageId" INTEGER;

-- DropTable
DROP TABLE "Images";

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_uid_key" ON "Image"("uid");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_bannerImageId_fkey" FOREIGN KEY ("bannerImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_bannerImageId_fkey" FOREIGN KEY ("bannerImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
