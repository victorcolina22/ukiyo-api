import 'dotenv/config';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: 3030,
    routes: AppRoutes.routes,
  });
  server.start();
}
