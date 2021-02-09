import 'reflect-metadata';
import { Connection, getConnection, createConnection, getConnectionOptions, ConnectionManager, getConnectionManager } from 'typeorm';
import { User } from '../dist/entities/User';

export const getOrCreateConnection = async (optionOverrides: Record<string, any> = {}): Promise<Connection> => {
  const ConnectionManager: ConnectionManager = getConnectionManager();
  const connectionOptions = await getConnectionOptions();
  const options: any = {
    ...connectionOptions,
    name: "default",
    entities: [User], 
    migrations: [__dirname + '/dist/migrations/*.ts'],
    ...optionOverrides
  };

  try {
    const connection: Connection = getConnection(options);
    return connection;
  } catch (e) {
    const connection: Connection = await createConnection(options);
    return connection;
  };  
};

export default getOrCreateConnection;