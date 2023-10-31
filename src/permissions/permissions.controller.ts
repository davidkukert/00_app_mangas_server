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
import { AuthorizationGuard } from 'src/auth/guards/authorization.guard';
import { RequirePermissions } from 'src/auth/decorators/require-permissions.decorator';

@UseGuards(JwtAuthGuard, AuthorizationGuard)
@Controller('permissions')
export class PermissionsController {
    constructor(private readonly permissionsService: PermissionsService) {}

    @RequirePermissions({ permissions: ['permission_create'] })
    @Post()
    create(@Body() data: CreatePermissionDto) {
        return this.permissionsService.create(data);
    }

    @RequirePermissions({ permissions: ['permission_findall'] })
    @Get()
    findAll() {
        return this.permissionsService.findAll();
    }

    @RequirePermissions({ permissions: ['permission_findone'] })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.permissionsService.findOne(id);
    }

    @RequirePermissions({ permissions: ['permission_update'] })
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdatePermissionDto) {
        return this.permissionsService.update(id, data);
    }

    @RequirePermissions({ permissions: ['permission_remove'] })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.permissionsService.remove(id);
    }
}
