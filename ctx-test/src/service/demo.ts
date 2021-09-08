import { Provide, Inject } from '@midwayjs/decorator';

@Provide()
export class DemoService {
  @Inject()
  ctx

  async execute(): Promise<any> {
    console.log(this.ctx)
  }
}