import { Chapter as ChapterType } from '@prisma/client';

export class Chapter implements ChapterType {
    id: string;
    number: number;
    title: string;
    images: string[];
    projectId: string;
}
