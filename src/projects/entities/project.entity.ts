import { $Enums, Project as ProjectType } from '@prisma/client';

export class Project implements ProjectType {
    id: string;
    title: string;
    titleAlters: string[];
    description: string;
    type: $Enums.ProjectType;
    adult: boolean;
    authors: string[];
    cover: string;
    views: number;
    createAt: Date;
    updateAt: Date;
}
