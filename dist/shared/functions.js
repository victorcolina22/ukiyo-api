"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMangaStructure = generateMangaStructure;
exports.cleanUndefinedProperties = cleanUndefinedProperties;
// Constants
const constants_1 = require("./constants");
function setMangaStructure(manga) {
    const { id, attributes, relationships } = manga;
    const coverArt = relationships.find((relation) => relation.type === constants_1.RELATIONSHIPS_TYPES.COVER_ART);
    const imageUrl = `${constants_1.UPLOADS_URL}/${id}/${coverArt?.attributes?.fileName}`;
    const author = relationships.find((relation) => relation.type === constants_1.RELATIONSHIPS_TYPES.AUTHOR);
    const genres = attributes.tags
        .filter((tag) => tag.attributes.group === constants_1.TAGS_GROUPS.GENRE)
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
function generateMangaStructure(mangas) {
    if (Array.isArray(mangas)) {
        const mangaStructureArr = [];
        mangas.forEach((manga) => mangaStructureArr.push(setMangaStructure(manga)));
        return mangaStructureArr;
    }
    else {
        return setMangaStructure(mangas);
    }
}
function cleanUndefinedProperties(obj) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    });
}
