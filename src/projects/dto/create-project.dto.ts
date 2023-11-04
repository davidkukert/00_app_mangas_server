import { $Enums, Prisma } from '@prisma/client';

export class CreateProjectDto implements Prisma.ProjectCreateInput {
    id?: string;
    title: string;
    titleAlters?: string[] | Prisma.ProjectCreatetitleAltersInput;
    description: string;
    type?: $Enums.ProjectType;
    adult: boolean;
    authors?: string[] | Prisma.ProjectCreateauthorsInput;
    cover?: string;
    views?: number;
    createAt?: string | Date;
    updateAt?: string | Date;
    tags?: Prisma.TagCreateNestedManyWithoutProjectsInput;
    chapters?: Prisma.ChapterCreateNestedManyWithoutProjectInput;
}
