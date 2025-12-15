import axios from 'axios';
import {
  BASE_URL,
  CHAPTER_DATA_URL,
  CHAPTER_IMAGES_URL,
  ENDPOINTS,
  LANGUAGE,
  SAFE_CONTENT_RATINGS,
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
    const params: Record<string, unknown> = {
      'includes[]': 'cover_art',
      'availableTranslatedLanguage[]': LANGUAGE,
      'contentRating[]': SAFE_CONTENT_RATINGS,
      limit: 50,
    };

    try {
      const mangadexResponse = await axios.get<MangadexResponse>(
        `${BASE_URL}${ENDPOINTS.MANGA_LIST}`,
        { params },
      );
      const mangadexData = mangadexResponse.data;

      return generateMangaStructure(mangadexData.data) as MangaStructure[];
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching mangadex data');
    }
  }

  async getMangaById(id: string): Promise<MangaStructure> {
    const mangaParams = {
      'includes[]': ['cover_art', 'author'],
      'availableTranslatedLanguage[]': LANGUAGE,
    };
    const mangadexRequest = axios.get(`${BASE_URL}/manga/${id}`, {
      params: mangaParams,
    });

    const feedParams = {
      'translatedLanguage[]': LANGUAGE,
      'order[chapter]': 'asc',
    };
    const mangadexFeedRequest = axios.get(`${BASE_URL}/manga/${id}/feed`, {
      params: feedParams,
    });

    try {
      const [mangadexReponse, mangadexFeedResponse] = await Promise.all([
        mangadexRequest,
        mangadexFeedRequest,
      ]);

      const mangadexStructure = generateMangaStructure(
        mangadexReponse.data.data,
      ) as MangaStructure;

      mangadexStructure.chapters = mangadexFeedResponse.data.data
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

  async getMangaByTitle(title: string): Promise<MangaStructure> {
    const params: Record<string, unknown> = {
      'includes[]': 'cover_art',
      'availableTranslatedLanguage[]': LANGUAGE,
      'contentRating[]': SAFE_CONTENT_RATINGS,
      title,
    };
    const mangadexRequest = await axios.get(`${BASE_URL}/manga`, {
      params,
    });
    return generateMangaStructure(mangadexRequest.data.data) as MangaStructure;
  }

  async getChapterImages(chapterId: string): Promise<ChapterImage[]> {
    try {
      const chapterResponse = await axios.get(
        `${CHAPTER_IMAGES_URL}/${chapterId}`,
      );
      const chapterData = chapterResponse.data;

      return chapterData.chapter.data.map((item: string) => ({
        chapterImageUrl: `${CHAPTER_DATA_URL}/${chapterData.chapter.hash}/${item}`,
      }));
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching mangadex data');
    }
  }
}
