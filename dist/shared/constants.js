"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAGS_GROUPS = exports.RELATIONSHIPS_TYPES = exports.ENDPOINTS = exports.CHAPTER_DATA_URL = exports.CHAPTER_IMAGES_URL = exports.UPLOADS_URL = exports.COVERS_URL = exports.BASE_URL = void 0;
exports.BASE_URL = process.env.MANGADEX_API_URL;
exports.COVERS_URL = process.env.MANGADEX_COVERS_URL;
exports.UPLOADS_URL = process.env.MANGADEX_UPLOADS_URL;
exports.CHAPTER_IMAGES_URL = process.env.MANGADEX_CHAPTER_IMAGES_URL;
exports.CHAPTER_DATA_URL = process.env.MANGADEX_CHAPTER_DATA_URL;
exports.ENDPOINTS = {
    MANGA_LIST: '/manga',
};
exports.RELATIONSHIPS_TYPES = {
    MANGA: 'manga',
    COVER_ART: 'cover_art',
    AUTHOR: 'author',
    ARTIST: 'artist',
    CREATOR: 'creator',
};
exports.TAGS_GROUPS = {
    GENRE: 'genre',
};
