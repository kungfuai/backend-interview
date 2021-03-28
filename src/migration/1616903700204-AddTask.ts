import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTask1616903700204 implements MigrationInterface {
    name = 'AddTask1616903700204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(100), "description" character varying(1024), "status" character varying NOT NULL DEFAULT 'new', CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
