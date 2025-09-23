import { CoverAttributes } from './covers';

export interface MangadexResponse {
  result: string;
  response: string;
  data: MangadexData[];
  limit: number;
  offset: number;
  total: number;
}

export interface MangadexData {
  id: string;
  type: RelationshipType;
  attributes: Attributes;
  relationships: Relationship[];
}

export interface Attributes {
  title: Title;
  altTitles: AltTitle[];
  description: PurpleDescription;
  isLocked: boolean;
  links: Links;
  originalLanguage: OriginalLanguage;
  lastVolume: null | string;
  lastChapter: null | string;
  publicationDemographic: null | string;
  status: Status;
  year: number;
  contentRating: ContentRating;
  tags: Tag[];
  state: State;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

export interface AltTitle {
  ja?: string;
  de?: string;
  en?: string;
  fr?: string;
  it?: string;
  ko?: string;
  zh?: string;
  sr?: string;
  ru?: string;
  th?: string;
  uk?: string;
  tr?: string;
  id?: string;
  'zh-hk'?: string;
  'ja-ro'?: string;
  vi?: string;
  'zh-ro'?: string;
  es?: string;
}

export enum ContentRating {
  Safe = 'safe',
  Suggestive = 'suggestive',
}

export interface PurpleDescription {
  en?: string;
  ja?: string;
  'pt-br'?: string;
  ru?: string;
  uk?: string;
  vi?: string;
  es?: string;
}

export interface Links {
  al?: string;
  ap?: string;
  bw?: string;
  kt?: string;
  mu?: string;
  amz?: string;
  cdj?: string;
  ebj?: string;
  mal?: string;
  raw?: string;
  engtl?: string;
}

export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja',
  Zh = 'zh',
}

export enum State {
  Published = 'published',
}

export enum Status {
  Completed = 'completed',
  Ongoing = 'ongoing',
}

export interface Tag {
  id: string;
  type: TagType;
  attributes: TagAttributes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  relationships: any[];
}

export interface TagAttributes {
  name: Title;
  description: FluffyDescription;
  group: Group;
  version: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FluffyDescription {}

export enum Group {
  Format = 'format',
  Genre = 'genre',
  Theme = 'theme',
}

export interface Title {
  en: string;
}

export enum TagType {
  Tag = 'tag',
}

export interface Relationship {
  id: string;
  type: RelationshipType;
  attributes?: CoverAttributes;
  related?: string;
}

export enum RelationshipType {
  Artist = 'artist',
  Author = 'author',
  CoverArt = 'cover_art',
  Creator = 'creator',
  Manga = 'manga',
}
