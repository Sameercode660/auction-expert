/*
  Warnings:

  - You are about to drop the column `image` on the `Bid` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `Bid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Bid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bid" DROP COLUMN "image",
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Auction" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://img.freepik.com/premium-vector/mock-auction-icon-vector-image-can-be-used-auction-house_120816-110462.jpg?w=740',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Auction_pkey" PRIMARY KEY ("id")
);
