import { v4 } from 'uuid';
import { NowRequest, NowResponse } from '@now/node';
import { Connection, Repository, getRepository } from 'typeorm';
import { getOrCreateConnection } from '../../../initializers/database';
import { User } from "../../../dist/entities/User";

type UserInfo = {
  firstName?: string,
  lastName?: string,
  birthDate?: Date,
  occupation?: string,
  email?: string,
  password?: string,
  phoneNumber?: string,
  vehicleVIN?: string,
  vehicleType?: string,
  vehicleMaker?: string,
  vehicleModel?: string,
  vehicleYear?: string
}

export default async (req: NowRequest, res: NowResponse) => {
  const method: string | string[] = req.method;
  const connection: Connection = await getOrCreateConnection();
  const userRepo: Repository<User> = await getRepository(User);
  const id: string | string[] = req.query.id;

  switch (method) {
    case 'GET':
      try {
        const user: User = await userRepo.findOne(id as string);
        await connection.close();
        return res.status(200).json({ ...user });
      } catch (e) {
        await connection.close();
        return res.status(400).send(e);
      }
    case 'PUT':
      try {
        const user: User = await userRepo.findOne(id as string);
        const updatedUserBody: User = await userRepo.save({ ...req.body });
        await connection.close();
        return res.status(200).json({ ...updatedUserBody });
      } catch (e) {
        await connection.close();
        return res.status(400).send(e);
      }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

};