import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Post()
    create(@Body() data: CreateTagDto) {
        return this.tagsService.create(data);
    }

    @Get()
    findAll() {
        return this.tagsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tagsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateTagDto) {
        return this.tagsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tagsService.remove(id);
    }
}
