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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthorizationGuard } from 'src/auth/guards/authorization.guard';
import { RequirePermissions } from 'src/auth/decorators/require-permissions.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() data: CreateUserDto) {
        return this.usersService.create(data);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, AuthorizationGuard)
    @RequirePermissions({ permissions: ['user_update'] })
    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateUserDto) {
        return this.usersService.update(id, data);
    }

    @UseGuards(JwtAuthGuard, AuthorizationGuard)
    @RequirePermissions({ permissions: ['user_remove'] })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
