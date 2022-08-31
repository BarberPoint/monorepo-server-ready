import app from '@src/app';
import env from '@src/config/env';

app.listen(env.SERVER_PORT, () => {
  console.log(`\nServer running on ${env.SERVER_URL}`);
});
