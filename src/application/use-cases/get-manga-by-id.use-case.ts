import { MangaRepository } from '@/domain/repositories/manga.repository';
import { MangaStructure } from '@/shared/interfaces/manga-structure';

export class GetMangaByIdUseCase {
  constructor(private mangaRepository: MangaRepository) {}

  async execute(id: string): Promise<MangaStructure> {
    return await this.mangaRepository.getMangaById(id);
  }
}
