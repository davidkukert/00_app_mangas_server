import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
    constructor(private prismaService: PrismaService) {}

    create(data: CreateTagDto) {
        return this.prismaService.tag.create({ data });
    }

    findAll() {
        return this.prismaService.tag.findMany();
    }

    findOne(id: string) {
        return this.prismaService.tag.findUnique({ where: { id } });
    }

    update(id: string, data: UpdateTagDto) {
        return this.prismaService.tag.update({ where: { id }, data });
    }

    remove(id: string) {
        return this.prismaService.tag.delete({ where: { id } });
    }
}
