/*
  Warnings:

  - You are about to drop the column `cityId` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[avatarId]` on the table `Language` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_countryId_fkey";

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "bannerImageId" INTEGER,
ADD COLUMN     "previewImageId" INTEGER;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "bannerImageId" INTEGER,
ADD COLUMN     "previewImageId" INTEGER;

-- AlterTable
ALTER TABLE "Images" DROP COLUMN "cityId",
DROP COLUMN "countryId",
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "avatarId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Language_avatarId_key" ON "Language"("avatarId");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_bannerImageId_fkey" FOREIGN KEY ("bannerImageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_bannerImageId_fkey" FOREIGN KEY ("bannerImageId") REFERENCES "Images"("id") ON DELETE SET NULL ON UPDATE CASCADE;
