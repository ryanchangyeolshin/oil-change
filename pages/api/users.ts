import { NowRequest, NowResponse } from '@now/node';
import { Connection, Repository, getRepository } from 'typeorm';
import { initializeDatabase } from '../../initializers/database';
import { User } from "../../dist/entities/User";

export default async (req: NowRequest, res: NowResponse) => {
  const connection: Connection = await initializeDatabase();
  const userRepo: Repository<User> = await getRepository(User);
  const offset: number = parseInt(req.query.offset.toString());
  const limit: number = parseInt(req.query.limit.toString());

  const users = await userRepo.find({ skip: offset, take: limit});
  await connection.close();
  return res.status(200).json({ users });
};
