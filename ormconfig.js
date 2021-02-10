require('dotenv').config();

const config = {
  type: process.env.TYPEORM_DATABASE_TYPE,
  host: process.env.TYPEORM_DATABASE_HOST,
  port: parseInt(process.env.TYPEORM_DATABASE_PORT),
  username: process.env.TYPEORM_DATABASE_USERNAME,
  password: process.env.TYPEORM_DATABASE_PASSWORD,
  database: 'oil_change_test',
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: 'file',
  keepConnectionAlive: true,
  entities: [__dirname + '/dist/entities/**/*{.ts,.js}'],
  migrations: [__dirname + '/dist/migrations/**/*{.ts,.js}'],
  seeds: ['dist/seeds/**/*.seed.ts'],
  factories: ['dist/factories/**/*.factory.ts'],
   cli: {
      entitiesDir: 'dist/entities',
      migrationsDir: 'dist/migrations',
  },
};

module.exports = config;