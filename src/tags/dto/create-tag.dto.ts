import { Prisma } from '@prisma/client';

export class CreateTagDto implements Prisma.TagCreateInput {
    id?: string;
    name: string;
    projects?: Prisma.ProjectCreateNestedManyWithoutTagsInput;
}
