import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/web';

describe('test/controller/base.test.ts', () => {

  it('should GET /', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const home = await createHttpRequest(app).get('/');
    expect(home.status).toBe(200);

    const noc = await createHttpRequest(app).get('/noc');
    expect(noc.status).toBe(200);

    // close app
    await close(app);
  });

});
