import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a = 1;
    const b = 2;
    const data = a > b ? 'hiihi' : 'huhu';
    return data;
  }
}
