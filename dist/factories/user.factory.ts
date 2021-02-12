import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../../dist/entities/User';
import vehicleMakers from '../../utils/vehicle-makers';
import vehicleTypes from '../../utils/vehicle-types';

define(User, (faker: typeof Faker) => {
  const gender: number = faker.random.number(1);
  const firstName: string = faker.name.firstName(gender);
  const lastName: string = faker.name.lastName(gender);
  const email: string = faker.internet.email();
  const phoneNumber: string = faker.phone.phoneNumber();
  const birthDate: Date = faker.date.recent();
  const occupation: string = faker.name.jobTitle();
  const vehicleVIN: string = faker.random.uuid();
  const vehicleType: string = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
  const vehicleMaker: string = vehicleMakers[Math.floor(Math.random() * vehicleMakers.length)].name;
  const vehicleModel: string = faker.random.word();
  const vehicleYear: string = Math.floor((Math.random() * 100) + 1900).toString();
  const createdAt: Date = new Date();
  const updatedAt: Date = new Date();
 
  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.phoneNumber = phoneNumber;
  user.birthDate = birthDate;
  user.occupation = occupation;
  user.vehicleVIN = vehicleVIN;
  user.vehicleType = vehicleType;
  user.vehicleMaker = vehicleMaker;
  user.vehicleModel = vehicleModel;
  user.vehicleYear = vehicleYear;
  user.createdAt = createdAt;
  user.updatedAt = updatedAt;

  return user
})