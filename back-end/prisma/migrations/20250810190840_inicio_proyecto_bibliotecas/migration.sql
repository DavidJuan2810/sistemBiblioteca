-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(191) NOT NULL,
    `contraseña` VARCHAR(191) NOT NULL,
    `rol` ENUM('Administrador') NOT NULL DEFAULT 'Administrador',
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bibliotecas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `ubicacion` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `bibliotecas_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `libro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `publicacion` DATETIME(3) NOT NULL,

    UNIQUE INDEX `libro_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `autor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `autor_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_libroSede` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_libroSede_AB_unique`(`A`, `B`),
    INDEX `_libroSede_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_autorLibro` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_autorLibro_AB_unique`(`A`, `B`),
    INDEX `_autorLibro_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_libroSede` ADD CONSTRAINT `_libroSede_A_fkey` FOREIGN KEY (`A`) REFERENCES `bibliotecas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_libroSede` ADD CONSTRAINT `_libroSede_B_fkey` FOREIGN KEY (`B`) REFERENCES `libro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_autorLibro` ADD CONSTRAINT `_autorLibro_A_fkey` FOREIGN KEY (`A`) REFERENCES `autor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_autorLibro` ADD CONSTRAINT `_autorLibro_B_fkey` FOREIGN KEY (`B`) REFERENCES `libro`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
