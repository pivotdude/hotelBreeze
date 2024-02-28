/*
  Warnings:

  - You are about to alter the column `price` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `Decimal(9,6)` to `Decimal(10,10)`.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,10);
