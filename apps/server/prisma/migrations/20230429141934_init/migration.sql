/*
  Warnings:

  - You are about to drop the column `houseListingId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the `HouseListing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roomListingId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_houseListingId_fkey";

-- DropForeignKey
ALTER TABLE "HouseListing" DROP CONSTRAINT "HouseListing_addressId_fkey";

-- DropForeignKey
ALTER TABLE "HouseListing" DROP CONSTRAINT "HouseListing_landlordId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_houseListingId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "houseListingId",
ADD COLUMN     "roomListingId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "HouseListing";

-- CreateTable
CREATE TABLE "RoomListing" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "landlordId" INTEGER NOT NULL,

    CONSTRAINT "RoomListing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomListing" ADD CONSTRAINT "RoomListing_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomListing" ADD CONSTRAINT "RoomListing_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_houseListingId_fkey" FOREIGN KEY ("houseListingId") REFERENCES "RoomListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_roomListingId_fkey" FOREIGN KEY ("roomListingId") REFERENCES "RoomListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
