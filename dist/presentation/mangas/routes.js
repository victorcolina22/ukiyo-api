"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class MangaRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const mangaController = new controller_1.MangaController();
        router.get('/', mangaController.mangaList);
        router.get('/:id', mangaController.mangaById);
        router.get('/chapter/:id', mangaController.imagesByChapterId);
        return router;
    }
}
exports.MangaRoutes = MangaRoutes;
