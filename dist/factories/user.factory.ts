import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../../dist/entities/User';

define(User, (faker: typeof Faker) => {
  const gender: number = faker.random.number(1);
  const firstName: string = faker.name.firstName(gender);
  const lastName: string = faker.name.lastName(gender);
  const email: string = faker.internet.email();
  const password: string = faker.internet.password();
  const phoneNumber: string = faker.phone.phoneNumber();
  const birthDate: Date = faker.date.recent();
  const occupation: string = faker.name.jobTitle();
  const vehicleType: string = faker.vehicle.type();
  const vehicleModel: string = faker.vehicle.model();
  const vehicleYear: string = Math.floor((Math.random() * 100) + 1900).toString();
  const createdAt: Date = new Date();
  const updatedAt: Date = new Date();
 
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = password;
  user.phoneNumber = phoneNumber;
  user.birthDate = birthDate;
  user.occupation = occupation;
  user.vehicleType = vehicleType;
  user.vehicleYear = vehicleYear;
  user.createdAt = createdAt;
  user.updatedAt = updatedAt;

  return user
})