import { MangaStructure } from '@/shared/interfaces/manga-structure';

export interface MangaRepository {
  getMangaList(): Promise<MangaStructure[]>;
  getMangaById(id: string): Promise<MangaStructure>;
  getMangaByTitle(title: string): Promise<MangaStructure>;
  getChapterImages(chapterId: string): Promise<ChapterImage[]>;
}

export interface ChapterImage {
  chapterImageUrl: string;
}
