import {MigrationInterface, QueryRunner} from "typeorm";

export class UserCreate1566339176512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE user (
            id int(11) NOT NULL AUTO_INCREMENT,
            firstName varchar(255) NOT NULL,
            lastName varchar(255) NOT NULL,
            age int(11) NOT NULL,
            username varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;`);
    };

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
