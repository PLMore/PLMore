/* eslint-disable @typescript-eslint/no-unused-vars */
import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {EmailTypeEnum} from '@ezyfs/common/enums/email-type.enum';
import {User} from '../users/user.entity';
import {EmailBuilder} from '../base/email.builder';
import {TimestampEntites} from '../base/timestamp.entity';

@ObjectType()
@Entity()
export class Material extends TimestampEntites {
  @PrimaryGeneratedColumn()
  @Field((type) => Int, {nullable: true})
  id: number;

  @Column()
  @Field((_)=> Int)
  quantity: number;


}
