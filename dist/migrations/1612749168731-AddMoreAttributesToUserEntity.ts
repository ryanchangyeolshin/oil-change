import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMoreAttributesToUserEntity1612749168731 implements MigrationInterface {
    name = 'AddMoreAttributesToUserEntity1612749168731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "vehicleVIN" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "vehicleMaker" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "vehicleMaker"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "vehicleVIN"`);
    }

}
