import { MangaRepository } from '@/domain/repositories/manga.repository';
import { MangaStructure } from '@/shared/interfaces/manga-structure';

export class GetMangaListUseCase {
  constructor(private mangaRepository: MangaRepository) {}

  async execute(): Promise<MangaStructure[]> {
    return await this.mangaRepository.getMangaList();
  }
}
