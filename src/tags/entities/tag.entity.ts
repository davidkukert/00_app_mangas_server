import { Tag as TagType } from '@prisma/client';

export class Tag implements TagType {
    id: string;
    name: string;
}
