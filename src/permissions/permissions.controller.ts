import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('permissions')
export class PermissionsController {
    constructor(private readonly permissionsService: PermissionsService) {}

    @Post()
    create(@Body() data: CreatePermissionDto) {
        return this.permissionsService.create(data);
    }

    @Get()
    findAll() {
        return this.permissionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.permissionsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdatePermissionDto) {
        return this.permissionsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.permissionsService.remove(id);
    }
}
