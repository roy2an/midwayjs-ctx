import { App, Configuration, Logger } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Application } from 'egg';
import { ILogger } from '@midwayjs/logger';
import * as ctxTest from 'ctx-test';

@Configuration({
  imports: [
    ctxTest
  ],
  importConfigs: ["./config"],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  @Logger()
  coreLogger: ILogger;

  async onReady(content: IMidwayContainer) {
    console.log('[ Midway ] onReady')
    this.coreLogger.info('[ Midway ] onReady')
  }

  async onStop() {
    this.coreLogger.info('[ Midway ] onStop')
  }
}
