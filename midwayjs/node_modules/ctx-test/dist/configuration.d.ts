import { ILifeCycle, IMidwayApplication, IMidwayContainer } from '@midwayjs/core';
import { ILogger } from '@midwayjs/logger';
export declare class WechatConfiguration implements ILifeCycle {
    app: IMidwayApplication;
    coreLogger: ILogger;
    onReady(content: IMidwayContainer): Promise<void>;
}
