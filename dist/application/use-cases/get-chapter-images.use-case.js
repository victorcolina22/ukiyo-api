"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChapterImagesUseCase = void 0;
class GetChapterImagesUseCase {
    mangaRepository;
    constructor(mangaRepository) {
        this.mangaRepository = mangaRepository;
    }
    async execute(chapterId) {
        return await this.mangaRepository.getChapterImages(chapterId);
    }
}
exports.GetChapterImagesUseCase = GetChapterImagesUseCase;
