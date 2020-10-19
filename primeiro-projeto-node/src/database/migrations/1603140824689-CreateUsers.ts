import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1603140824689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isUnique: true,
          },
          {
            name: 'created_at',
            type: 'temestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'temestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}