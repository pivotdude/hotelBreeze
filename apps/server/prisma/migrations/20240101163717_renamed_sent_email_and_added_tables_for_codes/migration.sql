/*
  Warnings:

  - You are about to drop the `sentEmail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sentEmail";

-- CreateTable
CREATE TABLE "SentEmail" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "context" JSONB,
    "data" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SentEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCodeType" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "VerificationCodeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCode" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expired" TIMESTAMP(3) NOT NULL,
    "attempt" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sentEmailId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SentEmail_uid_key" ON "SentEmail"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCodeType_uid_key" ON "VerificationCodeType"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCode_uid_key" ON "VerificationCode"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationCode_sentEmailId_key" ON "VerificationCode"("sentEmailId");

-- AddForeignKey
ALTER TABLE "VerificationCode" ADD CONSTRAINT "VerificationCode_sentEmailId_fkey" FOREIGN KEY ("sentEmailId") REFERENCES "SentEmail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationCode" ADD CONSTRAINT "VerificationCode_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "VerificationCodeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
