"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangadexRepository = void 0;
const constants_1 = require("@/shared/constants");
const functions_1 = require("@/shared/functions");
class MangadexRepository {
    async getMangaList() {
        const mangadexUrl = `${constants_1.BASE_URL}${constants_1.ENDPOINTS.MANGA_LIST}?includes[]=cover_art&availableTranslatedLanguage[]=es`;
        try {
            const mangadexResponse = await fetch(mangadexUrl);
            const mangadexData = await mangadexResponse.json();
            return (0, functions_1.generateMangaStructure)(mangadexData.data);
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching mangadex data');
        }
    }
    async getMangaById(id) {
        const mangadexRequest = fetch(`${constants_1.BASE_URL}/manga/${id}?includes[]=cover_art&includes[]=author&translatedLanguage[]=es`).then((response) => response.json());
        const mangadexFeedRequest = fetch(`${constants_1.BASE_URL}/manga/${id}/feed`).then((response) => response.json());
        try {
            const [mangadexReponse, mangadexFeedResponse] = await Promise.all([
                mangadexRequest,
                mangadexFeedRequest,
            ]);
            const mangadexStructure = (0, functions_1.generateMangaStructure)(mangadexReponse.data);
            mangadexStructure.chapters = mangadexFeedResponse.data
                .map((chapter) => ({
                id: chapter.id,
                chapter: chapter.attributes.chapter,
            }))
                .sort((a, b) => Number(a.chapter) - Number(b.chapter));
            return mangadexStructure;
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching mangadex data');
        }
    }
    async getChapterImages(chapterId) {
        try {
            const chapterResponse = await fetch(`${constants_1.CHAPTER_IMAGES_URL}/${chapterId}`);
            const chapterData = await chapterResponse.json();
            return chapterData.chapter.data.map((item) => ({
                chapterImageUrl: `${constants_1.CHAPTER_DATA_URL}/${chapterData.chapter.hash}/${item}`,
            }));
        }
        catch (error) {
            console.log(error);
            throw new Error('Error fetching mangadex data');
        }
    }
}
exports.MangadexRepository = MangadexRepository;
