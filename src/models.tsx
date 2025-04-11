export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export enum StatusType {
  ok = "ok",
  error = "error",
}

export type SourceResponse = {
  status: StatusType;
  sources: Source[];
};

export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ArticleResponse = {
  status: StatusType;
  totalResults: number;
  articles: Article[] | [];
};
