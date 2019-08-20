import {MigrationInterface, QueryRunner} from "typeorm";

export class UserFill1566339964577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO user (id, firstName, lastName, age, username, password)
        VALUES
        (1, 'admin', 'admin', 38, 'admin', '$2b$10$WQsixT3VOiyZcAjACtKLCu9pMy4dtU812H2ZFlXlQSalSLdpo9gOC');`);
    };

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
