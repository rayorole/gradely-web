-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('STUDENT', 'TEACHER', 'ADMIN', 'COACCOUNT') NOT NULL DEFAULT 'STUDENT';
