/*
  Warnings:

  - Added the required column `englishName` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `englishName` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "englishName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "englishName" TEXT NOT NULL;
