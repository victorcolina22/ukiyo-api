import { Router } from 'express';
import { MangaController } from './controller';

export class MangaRoutes {
  static get routes(): Router {
    const router = Router();
    const mangaController = new MangaController();

    router.get('/', mangaController.mangaList);
    router.get('/:id', mangaController.mangaById);
    router.get('/chapter/:id', mangaController.imagesByChapterId);

    return router;
  }
}
