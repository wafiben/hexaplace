import { MigrationInterface, QueryRunner } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export class CategoryTable1634280000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as PostgresConnectionOptions;
    await queryRunner.query(`
      -- Table: category
      
      CREATE TABLE IF NOT EXISTS "${schema}".category
      (
          id character varying(255),
          name character varying(255) NOT NULL,
          description text NOT NULL,
          "createdDate" character varying(30),
          "updatedDate" character varying(30),
          parentId character varying(255),
          metadata jsonb,
          CONSTRAINT category_pkey PRIMARY KEY (id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as PostgresConnectionOptions;
    await queryRunner.query(`
      -- Table: category
      DROP TABLE IF EXISTS "${schema}".category;
    `);
  }
}


/* public async down(queryRunner: QueryRunner): Promise<void> {
  const { schema } = queryRunner.connection
    .options as PostgresConnectionOptions;
  await queryRunner.query(
    `
-- Table: product
DROP TABLE IF EXISTS "${schema}".product;
    `,
  );
}
 */
