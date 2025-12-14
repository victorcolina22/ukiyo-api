import {
  BASE_URL,
  CHAPTER_DATA_URL,
  CHAPTER_IMAGES_URL,
  ENDPOINTS,
} from '@/shared/constants';
import { generateMangaStructure } from '@/shared/functions';
import { Feed } from '@/shared/interfaces/feed';
import {
  MangaRepository,
  ChapterImage,
} from '@/domain/repositories/manga.repository';
import { MangaStructure, Chapter } from '@/shared/interfaces/manga-structure';
import { MangadexResponse } from '@/shared/interfaces/mangadex';

export class MangadexRepository implements MangaRepository {
  async getMangaList(): Promise<MangaStructure[]> {
    const mangadexUrl = `${BASE_URL}${ENDPOINTS.MANGA_LIST}?includes[]=cover_art&availableTranslatedLanguage[]=es`;

    try {
      const mangadexResponse = await fetch(mangadexUrl);
      const mangadexData: MangadexResponse = await mangadexResponse.json();

      return generateMangaStructure(mangadexData.data) as MangaStructure[];
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching mangadex data');
    }
  }

  async getMangaById(id: string): Promise<MangaStructure> {
    const mangadexRequest = fetch(
      `${BASE_URL}/manga/${id}?includes[]=cover_art&includes[]=author&translatedLanguage[]=es`,
    ).then((response) => response.json());
    const mangadexFeedRequest = fetch(`${BASE_URL}/manga/${id}/feed`).then(
      (response) => response.json(),
    );

    try {
      const [mangadexReponse, mangadexFeedResponse] = await Promise.all([
        mangadexRequest,
        mangadexFeedRequest,
      ]);

      const mangadexStructure = generateMangaStructure(
        mangadexReponse.data,
      ) as MangaStructure;

      mangadexStructure.chapters = mangadexFeedResponse.data
        .map((chapter: Feed) => ({
          id: chapter.id,
          chapter: chapter.attributes.chapter,
        }))
        .sort(
          (a: Chapter, b: Chapter) => Number(a.chapter) - Number(b.chapter),
        );

      return mangadexStructure;
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching mangadex data');
    }
  }

  async getChapterImages(chapterId: string): Promise<ChapterImage[]> {
    try {
      const chapterResponse = await fetch(`${CHAPTER_IMAGES_URL}/${chapterId}`);
      const chapterData = await chapterResponse.json();

      return chapterData.chapter.data.map((item: string) => ({
        chapterImageUrl: `${CHAPTER_DATA_URL}/${chapterData.chapter.hash}/${item}`,
      }));
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching mangadex data');
    }
  }
}
