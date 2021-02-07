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
  entities: [__dirname + '/entities/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  seeds: ['src/database/seeds/**/*.seed.ts'],
  factories: ['src/database/factories/**/*.factory.ts'],
   cli: {
      entitiesDir: 'dist/entities',
      migrationsDir: 'dist/migrations',
  },
};

console.log(config);

export = config;