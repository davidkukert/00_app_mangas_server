import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ProjectsModule } from './projects/projects.module';
import { TagsModule } from './tags/tags.module';
import { ChaptersModule } from './chapters/chapters.module';
import configuration from './config/configuration';

@Module({
    imports: [
        PrismaModule,
        UsersModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
        }),
        RolesModule,
        PermissionsModule,
        ProjectsModule,
        TagsModule,
        ChaptersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
