import { useEffect } from "react";
import { useState } from "react";
import { Article, Params } from "../models";
import { getArticles } from "../api/ArticleService";
import config from "../../config";

const useSearchEverything = (params: Params) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const buildURL = () => {
    const url = new URL("https://newsapi.org/v2/everything/");
    if (params.sources) url.searchParams.append("sources", params.sources);

    if (params.page) url.searchParams.append("page", String(params.page));
    if (params.from) url.searchParams.append("from", formatToISO(params.from));
    if (params.to) url.searchParams.append("to", formatToISO(params.to));
    if (params.language) url.searchParams.append("language", params.language);
    if (params.sortBy) url.searchParams.append("sortBy", params.sortBy);

    if (params.pageSize)
      url.searchParams.append("pageSize", String(params.pageSize));
    url.searchParams.append("apiKey", config.NEWSAPIKEY);
    return url.toString();
  };

  useEffect(() => {
    const fetchTopHeadLines = async () => {
      const finalUrl = buildURL();

      try {
        const data = await getArticles(finalUrl);

        if (data) {
          setArticles(data.articles);
          setTotalResults(data.totalResults);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTopHeadLines();
  }, [params]);

  return {
    articles: articles,
    totalResults: totalResults,
    errors: error,
    isLoading: isLoading,
  };
};

export default useSearchEverything;

const formatToISO = (date: Date) => {
  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(
      "-",
    ) +
    "T" +
    [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(
      ":",
    )
  );
};
