import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
    username: string;
    password: string;
}
