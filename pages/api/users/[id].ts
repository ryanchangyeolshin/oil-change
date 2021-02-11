import { v4 } from 'uuid';
import { NowRequest, NowResponse } from '@now/node';
import { Connection, Repository, getRepository } from 'typeorm';
import { getOrCreateConnection } from '../../../initializers/database';
import { User } from "../../../dist/entities/User";

export default async (req: NowRequest, res: NowResponse) => {
  const method: string | string[] = req.method;
  const connection: Connection = await getOrCreateConnection();
  const userRepo: Repository<User> = await getRepository(User);

  switch (method) {
    case 'GET':
      try {
        const id: string | string[] = req.query.id;
        const users: User = await userRepo.findOne(id as string);
        await connection.close();
        return res.status(200).json({ users });
      } catch (e) {
        await connection.close();
        return res.status(400).send(e);
      }
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

};