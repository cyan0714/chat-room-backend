import { Controller, Get } from '@nestjs/common';
import { OssService } from './oss.service';

@Controller('oss')
export class OssController {
  constructor(private readonly ossService: OssService) {}

  @Get('ossInfo')
  async getOssInfo() {
    return this.ossService.getOssInfo();
  }
}
