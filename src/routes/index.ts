import { Router } from 'express';

// Controllers
import { imagesByChapterId, mangaById, mangaList } from '../controllers/mangas';

const router = Router();

router.get('/mangas', mangaList);
router.get('/manga/:id', mangaById);
router.get('/manga/chapter/:id', imagesByChapterId);

export default router;
