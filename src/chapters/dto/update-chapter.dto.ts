import { PartialType } from '@nestjs/mapped-types';
import { CreateChapterDto } from './create-chapter.dto';
import { Prisma } from '@prisma/client';

export class UpdateChapterDto
    extends PartialType(CreateChapterDto)
    implements Prisma.ChapterUpdateInput {}
