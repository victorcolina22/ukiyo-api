import { MangaRepository } from '@/domain/repositories/manga.repository';
import { ChapterImage } from '@/domain/repositories/manga.repository';

export class GetChapterImagesUseCase {
  constructor(private mangaRepository: MangaRepository) {}

  async execute(chapterId: string): Promise<ChapterImage[]> {
    return await this.mangaRepository.getChapterImages(chapterId);
  }
}
