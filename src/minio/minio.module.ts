import { Global, Module } from '@nestjs/common';
import { MinioController } from './minio.controller';
import * as Minio from 'minio';

@Global()
@Module({
  providers: [
    {
      provide: 'MINIO_CLIENT',
      async useFactory() {
        const client = new Minio.Client({
          endPoint: 'localhost',
          port: 9000,
          useSSL: false,
          accessKey: 'LYXOYRC6HRE4K5YFU4O2',
          secretKey: 'DlZCVD1G0muRLtVXedkE4ABoWYKtGK4bmTDR7Yon',
        });
        return client;
      },
    },
  ],
  exports: ['MINIO_CLIENT'],
  controllers: [MinioController],
})
export class MinioModule {}
