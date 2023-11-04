import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Controller('chapters')
export class ChaptersController {
    constructor(private readonly chaptersService: ChaptersService) {}

    @Post()
    create(@Body() data: CreateChapterDto) {
        return this.chaptersService.create(data);
    }

    @Get()
    findAll() {
        return this.chaptersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.chaptersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateChapterDto) {
        return this.chaptersService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.chaptersService.remove(id);
    }
}
