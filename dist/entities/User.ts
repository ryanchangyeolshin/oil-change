import {
  Entity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: "varchar", nullable: true })
  public firstName!: string | null;

  @Column({ type: "varchar", nullable: true })
  public lastName!: string | null;

  @Index({ unique: true })
  @Column({ type: "varchar" })
  public email!: string;

  @Column({ type: "varchar", nullable: false })
  public password!: string | null;

  @Column({ type: "varchar", nullable: true })
  public phoneNumber!: string | null;

  @Column({ type: "date", nullable: true })
  public birthDate!: Date | null;

  @Column({ type: "varchar", default: "unemployed" })
  public occupation: string;

  @Column({ type: "varchar", nullable: false })
  public vehicleVIN: string;

  @Column({ type: "varchar", nullable: false })
  public vehicleType: string;

  @Column({ type: "varchar", nullable: false })
  public vehicleMaker: string;

  @Column({ type: "varchar", nullable: false })
  public vehicleModel: string;

  @Column({ type: "varchar", nullable: false })
  public vehicleYear: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}