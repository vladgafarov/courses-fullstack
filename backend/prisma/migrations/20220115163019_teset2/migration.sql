-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "discount" INTEGER,
ALTER COLUMN "images" DROP NOT NULL,
ALTER COLUMN "mainImage" DROP NOT NULL;