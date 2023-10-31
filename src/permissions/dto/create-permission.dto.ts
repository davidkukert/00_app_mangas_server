import { Prisma } from '@prisma/client';

export class CreatePermissionDto implements Prisma.PermissionCreateInput {
    name: string;
    description: string;
}
