import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prismaService: PrismaService) {}

    create(data: CreateProjectDto) {
        return this.prismaService.project.create({ data });
    }

    findAll() {
        return this.prismaService.project.findMany();
    }

    findOne(id: string) {
        return this.prismaService.project.findUnique({ where: { id } });
    }

    update(id: string, data: UpdateProjectDto) {
        return this.prismaService.project.update({ where: { id }, data });
    }

    remove(id: string) {
        return this.prismaService.project.delete({ where: { id } });
    }
}
