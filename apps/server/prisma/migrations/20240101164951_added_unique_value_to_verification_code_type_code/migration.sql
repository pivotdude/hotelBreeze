/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `VerificationCodeType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VerificationCodeType_code_key" ON "VerificationCodeType"("code");
