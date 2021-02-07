import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class AddNewTables1612673742095 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "question",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true);

        await queryRunner.createIndex("questions", new TableIndex({
            name: "IDX_QUESTION_NAME",
            columnNames: ["name"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("question", "IDX_QUESTION_NAME");
        await queryRunner.dropTable("question");
    }

}
