import { PartialType } from '@nestjs/mapped-types';
import { CreateTagDto } from './create-tag.dto';
import { Prisma } from '@prisma/client';

export class UpdateTagDto
    extends PartialType(CreateTagDto)
    implements Prisma.TagUpdateInput {}
