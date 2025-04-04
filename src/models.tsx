export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

enum StatusType {
  ok = "ok",
  error = "error",
}

export type SourceResponse = {
  status: StatusType;
  sources: Source[];
};
