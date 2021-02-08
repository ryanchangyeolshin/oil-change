import { NowRequest, NowResponse } from '@now/node';
import { Connection, getRepository } from 'typeorm';
import { initializeDatabase } from '../../initializers/database';
import { User } from "../../dist/entities/User";

export default async (req: NowRequest, res: NowResponse) => {
  const connection = await initializeDatabase();
  const userRepo = await getRepository(User);
  const offset: number = parseInt(req.query.offset.toString());
  const limit: number = parseInt(req.query.limit.toString());

  const users = await userRepo.find({ skip: offset, take: limit});
  await connection.close();
  return res.json({ users });
};
