import { Injectable } from '@nestjs/common';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChaptersService {
    constructor(private prismaService: PrismaService) {}

    create(data: CreateChapterDto) {
        return this.prismaService.chapter.create({ data });
    }

    findAll() {
        return this.prismaService.chapter.findMany();
    }

    findOne(id: string) {
        return this.prismaService.chapter.findUnique({ where: { id } });
    }

    update(id: string, data: UpdateChapterDto) {
        return this.prismaService.chapter.update({ where: { id }, data });
    }

    remove(id: string) {
        return this.prismaService.chapter.delete({ where: { id } });
    }
}
