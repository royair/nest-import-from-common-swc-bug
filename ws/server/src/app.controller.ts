import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ARTIFACT_TYPE } from '../../common/src';

console.log(ARTIFACT_TYPE.AUTOCAD)

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
