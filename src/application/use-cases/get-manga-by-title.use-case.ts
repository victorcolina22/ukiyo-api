import { MangaRepository } from '@/domain/repositories/manga.repository';
import { MangaStructure } from '@/shared/interfaces/manga-structure';

export class GetMangaByTitleUseCase {
  constructor(private mangaRepository: MangaRepository) {}

  async execute(title: string): Promise<MangaStructure> {
    return await this.mangaRepository.getMangaByTitle(title);
  }
}
