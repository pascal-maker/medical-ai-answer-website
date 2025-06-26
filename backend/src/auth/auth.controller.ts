import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

class RegisterDto {
  email!: string;
  password!: string;
  name?: string;
}

class LoginDto {
  email!: string;
  password!: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto.email, dto.password, dto.name);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    if (!user) {
      return { error: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
} 