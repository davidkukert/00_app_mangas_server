import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByUsername(username);

        if (user && bcrypt.compareSync(pass, user.password)) {
            user.password = undefined;
            const payload = { sub: user.id, username: user.username };
            return {
                accessToken: await this.jwtService.signAsync(payload),
            };
        }

        throw new UnauthorizedException();
    }
}
