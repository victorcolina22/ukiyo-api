// Shared
import {
  BASE_URL,
  CHAPTER_DATA_URL,
  CHAPTER_IMAGES_URL,
  ENDPOINTS,
} from '../shared/constants';
import { generateMangaStructure } from '../shared/functions';
import { Feed } from '../shared/interfaces/feed';
import { Chapter, MangaStructure } from '../shared/interfaces/manga-structure';
import { MangadexResponse } from '../shared/interfaces/mangadex';

export const mangaList = async (req, res) => {
  const mangadexUrl = `${BASE_URL}${ENDPOINTS.MANGA_LIST}?includes[]=cover_art`;

  try {
    const mangadexResponse = await fetch(mangadexUrl);
    const mangadexData: MangadexResponse = await mangadexResponse.json();

    const mangaStructure = generateMangaStructure(mangadexData.data);

    return res.status(200).json(mangaStructure);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching mangadex data');
  }
};

export const mangaById = async (req, res) => {
  const { id } = req.params;

  const mangadexRequest = fetch(
    `${BASE_URL}/manga/${id}?includes[]=cover_art&includes[]=author`,
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
      .sort((a: Chapter, b: Chapter) => Number(a.chapter) - Number(b.chapter));

    return res.status(200).json(mangadexStructure);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching mangadex data');
  }
};

export const imagesByChapterId = async (req, res) => {
  const { id } = req.params;

  try {
    const chapterResponse = await fetch(`${CHAPTER_IMAGES_URL}/${id}`);
    const chapterData = await chapterResponse.json();

    const chapterStructure = chapterData.chapter.data.map((item: string) => ({
      chapterImageUrl: `${CHAPTER_DATA_URL}/${chapterData.chapter.hash}/${item}`,
    }));

    return res.status(200).json(chapterStructure);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching mangadex data');
  }
};
