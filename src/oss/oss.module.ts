import { Global, Module } from '@nestjs/common';
import { OssController } from './oss.controller';
import { OssService } from './oss.service';
import * as OSS from 'ali-oss';

@Global()
@Module({
  providers: [
    {
      provide: 'OSS_CLIENT',
      async useFactory() {
        const client = new OSS({
          region: process.env.OSS_REGION,
          bucket: process.env.OSS_BUCKET,
          accessKeyId: process.env.OSS_ACCESS_KEY_ID,
          accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
        });
        return client;
      },
    },
    OssService,
  ],
  exports: ['OSS_CLIENT', OssService],
  controllers: [OssController],
})
export class OssModule {}
