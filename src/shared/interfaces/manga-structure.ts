import { Tag } from './mangadex';

export interface MangaStructure {
  id: string;
  title: string;
  description: string;
  status: string;
  year: number;
  tags?: Tag[];
  imageUrl: string;
  genres: string[];
  chapters?: Chapter[];
  author?: string;
}

export interface Chapter {
  id: string;
  chapter: string;
}
