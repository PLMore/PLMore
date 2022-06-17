/* eslint-disable @typescript-eslint/no-unused-vars */
import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {TimestampEntites} from '../../base/timestamp.entity';

@ObjectType()
@Entity()
export class BomItem extends TimestampEntites {
  @PrimaryGeneratedColumn()
  @Field((type) => Int, {nullable: true})
  id: number;

}
