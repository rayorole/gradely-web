-- AlterTable
ALTER TABLE `Account` ADD COLUMN `ext_expires_in` INTEGER NULL;

-- CreateTable
CREATE TABLE `School` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `domain` VARCHAR(191) NOT NULL,
    `smartschool_id` VARCHAR(191) NULL,

    UNIQUE INDEX `School_domain_key`(`domain`),
    UNIQUE INDEX `School_smartschool_id_key`(`smartschool_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
