import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { Prisma } from '@prisma/client';

export class UpdateProjectDto
    extends PartialType(CreateProjectDto)
    implements Prisma.ProjectUpdateInput {}
