import { Prisma } from '@prisma/client';

export class CreateRoleDto implements Prisma.RoleCreateInput {
    name: string;
    description: string;
}
