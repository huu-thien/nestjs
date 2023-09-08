import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = 'toi la da ta ne';
    return data;
  }
}
