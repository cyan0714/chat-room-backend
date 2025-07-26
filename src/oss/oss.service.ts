import { Inject, Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss';

@Injectable()
export class OssService {
  @Inject('OSS_CLIENT')
  private ossClient: OSS;

  async getOSSFileUrl(name: string, file: any): Promise<string> {
    try {
      const result = await this.ossClient.put(name, file);
      return result.url;
    } catch (error) {
      throw new Error(`Failed to get file URL: ${error.message}`);
    }
  }

  async getOssInfo() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const res = this.ossClient.calculatePostSignature({
      expiration: date.toISOString(),
      conditions: [['content-length-range', 0, 1048576000]],
    });
    const host = `https://${process.env.OSS_BUCKET}.${process.env.OSS_REGION}.aliyuncs.com`;
    return {
      ...res,
      host,
    };
    // return example:
    // return {
    //   OSSAccessKeyId: res.OSSAccessKeyId,
    //   policy: res.policy,
    //   Signature: res.signature,
    //   host,
    // };
  }
}
