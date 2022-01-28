import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1643376617726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orders",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "varchar"
                    },
                    {
                        name: "product_id",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserProduct",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKProductUser",
                        referencedTableName: "products",
                        referencedColumnNames: ["id"],
                        columnNames: ["product_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}
