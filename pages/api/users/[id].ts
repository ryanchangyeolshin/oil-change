import { NowRequest, NowResponse } from '@now/node';
import { Connection, Repository, getRepository } from 'typeorm';
import { getOrCreateConnection } from '../../../initializers/database';
import { User } from "../../../dist/entities/User";

export default async (req: NowRequest, res: NowResponse) => {
  const connection: Connection = await getOrCreateConnection();
  const userRepo: Repository<User> = await getRepository(User);

  const users = await userRepo.findOne(1);
  await connection.close();
  return res.status(200).json({ users });
};