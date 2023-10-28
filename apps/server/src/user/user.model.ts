
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {Role, User} from "@prisma/client";
import {RoleModel} from "../role/role.model";

@ObjectType()
export class UserModel implements User {
  @Field(type => Int)
  id: number;

  @Field()
  uid: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  isVerified: boolean;



  @Field(type => Int)
  roleId: number;
  @Field(type => RoleModel)
  role: RoleModel




  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}