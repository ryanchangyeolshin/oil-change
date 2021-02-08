import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPasswordToUserEntity1612741818853 implements MigrationInterface {
    name = 'AddPasswordToUserEntity1612741818853'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
