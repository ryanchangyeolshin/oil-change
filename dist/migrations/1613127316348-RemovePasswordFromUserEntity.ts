import {MigrationInterface, QueryRunner} from "typeorm";

export class RemovePasswordFromUserEntity1613127316348 implements MigrationInterface {
    name = 'RemovePasswordFromUserEntity1613127316348'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

}
