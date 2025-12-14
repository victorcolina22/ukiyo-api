"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaController = void 0;
const get_manga_list_use_case_1 = require("@/application/use-cases/get-manga-list.use-case");
const get_manga_by_id_use_case_1 = require("@/application/use-cases/get-manga-by-id.use-case");
const get_chapter_images_use_case_1 = require("@/application/use-cases/get-chapter-images.use-case");
const mangadex_repository_1 = require("@/infrastructure/repositories/mangadex.repository");
class MangaController {
    getMangaListUseCase;
    getMangaByIdUseCase;
    getChapterImagesUseCase;
    constructor() {
        const mangaRepository = new mangadex_repository_1.MangadexRepository();
        this.getMangaListUseCase = new get_manga_list_use_case_1.GetMangaListUseCase(mangaRepository);
        this.getMangaByIdUseCase = new get_manga_by_id_use_case_1.GetMangaByIdUseCase(mangaRepository);
        this.getChapterImagesUseCase = new get_chapter_images_use_case_1.GetChapterImagesUseCase(mangaRepository);
    }
    mangaList = async (_req, res) => {
        try {
            const mangaStructure = await this.getMangaListUseCase.execute();
            res.status(200).json(mangaStructure);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching manga list');
        }
    };
    mangaById = async (req, res) => {
        const { id } = req.params;
        try {
            const mangaStructure = await this.getMangaByIdUseCase.execute(id);
            res.status(200).json(mangaStructure);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching manga by id');
        }
    };
    imagesByChapterId = async (req, res) => {
        const { id } = req.params;
        try {
            const chapterImages = await this.getChapterImagesUseCase.execute(id);
            res.status(200).json(chapterImages);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching chapter images');
        }
    };
}
exports.MangaController = MangaController;
