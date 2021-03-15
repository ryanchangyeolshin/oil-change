import { v4 } from 'uuid';
import { NowRequest, NowResponse } from '@now/node';
import { Connection, Repository, getRepository, AdvancedConsoleLogger } from 'typeorm';
import { getOrCreateConnection } from '../../initializers/database';
import { User } from "../../dist/entities/User";

interface UserPayload {
  id?: string,
  firstName?: string,
  lastName?: string,
  birthDate?: Date,
  occupation?: string,
  email?: string,
  phoneNumber?: string,
  vehicleVIN?: string,
  vehicleType?: string,
  vehicleMake?: string,
  vehicleModel?: string,
  vehicleYear?: string
};

export default async (req: NowRequest, res: NowResponse) => {
  const method: string | string[] = req.method;
  const connection: Connection = await getOrCreateConnection();
  const userRepo: Repository<User> = await getRepository(User);

  switch (method) {
    case 'GET':
      try {
        const offset: number = parseInt(req.query.offset.toString());
        const limit: number = parseInt(req.query.limit.toString());
        const users = await userRepo.find({ skip: offset, take: limit });
        await connection.close();
        return res.status(200).json({ users });
      } catch (e) {
        await connection.close();
        return res.status(400).send(e);
      }
    case 'POST':
      const newUserId: string = v4();
      const newUserPayload: UserPayload = { id: newUserId, ...req.body };
      try {
        const user: User = userRepo.create(newUserPayload);
        await userRepo.save(user);
        await connection.close();
        return res.status(200).json({ result: `User ${user.firstName} ${user.lastName}, ID: ${user.id} has been created!` });
      } catch (e) {
        await connection.close();
        return res.status(400).send(e);
      }  
    default:
      break;
  }
};
