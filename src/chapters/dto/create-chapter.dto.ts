import { Prisma } from '@prisma/client';

export class CreateChapterDto implements Prisma.ChapterCreateInput {
    id?: string;
    number: number;
    title: string;
    images?: Prisma.ChapterCreateimagesInput | string[];
    project: Prisma.ProjectCreateNestedOneWithoutChaptersInput;
}
