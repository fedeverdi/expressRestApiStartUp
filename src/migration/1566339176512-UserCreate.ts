import {MigrationInterface, QueryRunner} from "typeorm";

export class UserCreate1566339176512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE user (
            id int(11) NOT NULL AUTO_INCREMENT,
            firstName varchar(255) DEFAULT "",
            lastName varchar(255) DEFAULT "",
            age int(11) DEFAULT 0,
            username varchar(255) NOT NULL,
            password varchar(255) NOT NULL,
            PRIMARY KEY (id)
          ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;`);
    };

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
