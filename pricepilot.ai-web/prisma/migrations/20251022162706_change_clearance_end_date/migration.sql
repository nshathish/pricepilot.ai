/*
  Warnings:

  - You are about to drop the column `clearance_end_date` on the `products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."idx_products_clearance_end_date";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "clearance_end_date",
ADD COLUMN     "expiry_date" DATE;

-- CreateIndex
CREATE INDEX "idx_products_expiry_date" ON "products"("expiry_date");
