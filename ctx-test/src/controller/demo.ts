import {
  Inject,
  Controller,
  Provide,
  Get
} from "@midwayjs/decorator";

import { DemoService } from "../service/demo";

@Provide()
@Controller('/')
export class DemoController {
  @Inject()
  ctx;

  @Inject() // 这样注入，demoService中的ctx为undefined
  demoService: DemoService;

  // @Inject('DEMO:demoService')// 这样注入，demoService中的ctx才有值
  // demoService;

  @Get('/test')
  async test () {
    await this.demoService.execute()
  }
}