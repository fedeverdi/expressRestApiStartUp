import {MigrationInterface, QueryRunner} from "typeorm";

export class UserFill1566339964577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into("user")
        .values({
            id: 1,
            firstName: 'admin',
            lastName: 'admin',
            age: 38,
            username: 'admin',
            password: '$2b$10$WQsixT3VOiyZcAjACtKLCu9pMy4dtU812H2ZFlXlQSalSLdpo9gOC'
        })
        .execute()
    };

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
