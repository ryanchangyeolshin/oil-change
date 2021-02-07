import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

interface BetterConnectionOptions extends PostgresConnectionOptions {
  readonly seeds?: (Function | string)[];
  readonly factories?: (Function | string)[];
}

const config: BetterConnectionOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'ryanchangyeolshin',
  password: 'ryanchangyeolshin',
  database: 'oil_change_dev',
  synchronize: true,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  entities: [__dirname + '/entities/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  seeds: ['src/database/seeds/**/*.seed.ts'],
  factories: ['src/database/factories/**/*.factory.ts'],
   cli: {
      entitiesDir: __dirname + '/entities',
      migrationsDir: __dirname + '/migrations',
  },
};

export = config;