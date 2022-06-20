/* eslint-disable @typescript-eslint/no-unused-vars */
import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Entity, PrimaryGeneratedColumn} from 'typeorm';
import {TimestampEntites} from '../../base/timestamp.entity';

@ObjectType()
@Entity()
export class BomAction extends TimestampEntites {
  @PrimaryGeneratedColumn()
  @Field((type) => Int, {nullable: true})
  id: number;
}
