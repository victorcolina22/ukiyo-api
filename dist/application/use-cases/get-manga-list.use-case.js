"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMangaListUseCase = void 0;
class GetMangaListUseCase {
    mangaRepository;
    constructor(mangaRepository) {
        this.mangaRepository = mangaRepository;
    }
    async execute() {
        return await this.mangaRepository.getMangaList();
    }
}
exports.GetMangaListUseCase = GetMangaListUseCase;
