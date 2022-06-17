/* eslint-disable @typescript-eslint/no-unused-vars */
import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {TimestampEntites} from '../base/timestamp.entity';
import { User } from '../users/user.entity';

@ObjectType()
@Entity()
export class Workspace extends TimestampEntites {
  @PrimaryGeneratedColumn()
  @Field((type) => Int,)
  id: number;

  @ManyToOne(() => User, (user) => user.ownedWorkspaces)
  @Field((type) => User)
  creator: User;

  @ManyToMany(() => User, (user) => user.stakeheldWorkspaces)
  @Field((type) => User)
  stakeholders: User[];

}


