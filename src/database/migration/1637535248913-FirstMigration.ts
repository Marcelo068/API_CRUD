import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1637535248913 implements MigrationInterface {
    name = 'FirstMigration1637535248913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "created_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "updated_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "nome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "descricao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "fabricante"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "fabricante" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "fabricante"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "fabricante" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "preco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "preco" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "descricao" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "nome" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "updated_date"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "created_date"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP CONSTRAINT "PK_a5d976312809192261ed96174f3"`);
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "id"`);
    }

}
