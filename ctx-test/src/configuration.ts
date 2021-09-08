// src/configuration.ts
import { ILifeCycle, IMidwayApplication, IMidwayContainer } from '@midwayjs/core';
import { Configuration, Logger, App } from '@midwayjs/decorator';
import { join } from 'path';
import { ILogger } from '@midwayjs/logger';

@Configuration({
  namespace: 'DEMO',
  importConfigs: [
    join(__dirname, 'config')
  ]
})
export class WechatConfiguration implements ILifeCycle {
  @App()
  app: IMidwayApplication

  @Logger()
  coreLogger: ILogger;

  async onReady(content: IMidwayContainer) {
    this.app.setAttr('DEMO', true)
  }
}
