-- CreateTable
CREATE TABLE "sentEmail" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "context" JSONB,
    "data" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sentEmail_pkey" PRIMARY KEY ("id")
);
