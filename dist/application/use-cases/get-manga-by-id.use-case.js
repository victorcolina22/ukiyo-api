"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMangaByIdUseCase = void 0;
class GetMangaByIdUseCase {
    mangaRepository;
    constructor(mangaRepository) {
        this.mangaRepository = mangaRepository;
    }
    async execute(id) {
        return await this.mangaRepository.getMangaById(id);
    }
}
exports.GetMangaByIdUseCase = GetMangaByIdUseCase;
