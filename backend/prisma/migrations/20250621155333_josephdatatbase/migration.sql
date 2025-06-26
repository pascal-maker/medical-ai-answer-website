/*
  Warnings:

  - The primary key for the `_ExamQuestions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_ExamQuestions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "_ExamQuestions" DROP CONSTRAINT "_ExamQuestions_AB_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "_ExamQuestions_AB_unique" ON "_ExamQuestions"("A", "B");
