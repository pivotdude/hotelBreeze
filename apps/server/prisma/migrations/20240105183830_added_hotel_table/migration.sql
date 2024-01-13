-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "countryId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "previewImageId" INTEGER,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_uid_key" ON "Hotel"("uid");

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
