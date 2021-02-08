require('dotenv').config();
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

interface BetterConnectionOptions extends PostgresConnectionOptions {
  readonly seeds?: (Function | string)[];
  readonly factories?: (Function | string)[];
}

const config: BetterConnectionOptions = {
  type: process.env.TYPEORM_DATABASE_TYPE as any,
  host: process.env.TYPEORM_DATABASE_HOST,
  port: parseInt(process.env.TYPEORM_DATABASE_PORT),
  username: process.env.TYPEORM_DATABASE_USERNAME,
  password: process.env.TYPEORM_DATABASE_PASSWORD,
  database: 'oil_change_test',
  synchronize: true,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  entities: [__dirname + '/dist/entities/**/*{.ts,.js}'],
  migrations: [__dirname + '/dist/migrations/**/*{.ts,.js}'],
  seeds: ['dist/seeds/**/*.seed.ts'],
  factories: ['dist/factories/**/*.factory.ts'],
   cli: {
      entitiesDir: 'dist/entities',
      migrationsDir: 'dist/migrations',
  },
};

export = config;