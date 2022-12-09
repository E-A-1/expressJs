import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_test")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName?: string;
}
