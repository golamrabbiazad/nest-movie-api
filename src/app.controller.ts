import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get('/')
  home(): string {
    return '<h1>Welcome to my Movie API.</h1>';
  }
}
