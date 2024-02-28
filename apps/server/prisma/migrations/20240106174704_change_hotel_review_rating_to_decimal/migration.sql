/*
  Warnings:

  - You are about to alter the column `reviewRating` on the `Header` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(3,3)`.

*/
-- AlterTable
ALTER TABLE "Hotel" ALTER COLUMN "reviewRating" SET DEFAULT 0,
ALTER COLUMN "reviewRating" SET DATA TYPE DECIMAL(2,2);
