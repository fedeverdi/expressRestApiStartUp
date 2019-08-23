import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserCreate1566339176512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "firstName",
                    type: "varchar",
                    isNullable: true,
                    comment: 'Nome utente',
                    length: '255'
                },
                {
                    name: "lastName",
                    type: "varchar",
                    isNullable: true,
                    comment: 'Cognome utente',
                    length: '255'
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: true,
                    comment: 'Età utente',
                    length: '11'
                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true,
                    comment: 'Email utente',
                    length: '255'
                },
                {
                    name: "username",
                    type: "varchar",
                    isNullable: false,
                    comment: 'Username utente',
                    length: '255'
                },
                {
                    name: "password",
                    type: "varchar",
                    isNullable: false,
                    comment: 'Username utente',
                    length: '255'
                }
            ]
        }), true)  

    };

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
