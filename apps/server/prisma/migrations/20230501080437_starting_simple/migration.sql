/*
  Warnings:

  - You are about to drop the column `addressId` on the `RoomListing` table. All the data in the column will be lost.
  - You are about to drop the column `bedrooms` on the `RoomListing` table. All the data in the column will be lost.
  - You are about to drop the column `landlordId` on the `RoomListing` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `RoomListing` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `RoomListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `RoomListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `RoomListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `RoomListing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_roomListingId_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_houseListingId_fkey";

-- DropForeignKey
ALTER TABLE "RoomListing" DROP CONSTRAINT "RoomListing_addressId_fkey";

-- DropForeignKey
ALTER TABLE "RoomListing" DROP CONSTRAINT "RoomListing_landlordId_fkey";

-- AlterTable
ALTER TABLE "RoomListing" DROP COLUMN "addressId",
DROP COLUMN "bedrooms",
DROP COLUMN "landlordId",
DROP COLUMN "rent",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "rooms" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "Image";

-- DropEnum
DROP TYPE "ApplicationStatus";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "RoomListing" ADD CONSTRAINT "RoomListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
