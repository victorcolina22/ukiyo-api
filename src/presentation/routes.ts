import { Router } from 'express';
import { MangaRoutes } from './mangas/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/mangas', MangaRoutes.routes);

    return router;
  }
}
