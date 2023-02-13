import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  helloPost(): any {
    return {
      name: 'vijay',
      age: 29,
    };
  }
}
