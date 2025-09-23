export interface CoversResponse {
  result: string;
  response: string;
  data: Cover;
}

export interface Cover {
  id: string;
  type: string;
  attributes: CoverAttributes;
  relationships: Relationship[];
}

export interface CoverAttributes {
  description: string;
  volume: string;
  fileName: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  name: string;
}

export interface Relationship {
  id: string;
  type: string;
  attributes?: CoverAttributes;
}
