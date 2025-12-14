// Constants
import { RELATIONSHIPS_TYPES, TAGS_GROUPS, UPLOADS_URL } from './constants';

// Interfaces
import { MangaStructure } from './interfaces/manga-structure';
import { MangadexData } from './interfaces/mangadex';

function setMangaStructure(manga: MangadexData): MangaStructure {
  const { id, attributes, relationships } = manga;

  const coverArt = relationships.find(
    (relation) => relation.type === RELATIONSHIPS_TYPES.COVER_ART,
  );
  const imageUrl = `${UPLOADS_URL}/${id}/${coverArt?.attributes?.fileName}`;

  const author = relationships.find(
    (relation) => relation.type === RELATIONSHIPS_TYPES.AUTHOR,
  );

  const genres = attributes.tags
    .filter((tag) => tag.attributes.group === TAGS_GROUPS.GENRE)
    .map((tag) => tag.attributes.name.en.trim());

  const structure = {
    id,
    title: attributes.title.en || attributes.title['ja-ro'],
    description: attributes.description.en ?? '',
    status: attributes.status,
    year: attributes.year,
    imageUrl,
    genres,
    author: author?.attributes?.name,
  };

  cleanUndefinedProperties(structure);

  return structure;
}

export function generateMangaStructure(mangas: MangadexData[] | MangadexData) {
  if (Array.isArray(mangas)) {
    const mangaStructureArr: MangaStructure[] = [];
    mangas.forEach((manga) => mangaStructureArr.push(setMangaStructure(manga)));
    return mangaStructureArr;
  } else {
    return setMangaStructure(mangas);
  }
}

export function cleanUndefinedProperties(obj: Record<string, unknown>) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}
