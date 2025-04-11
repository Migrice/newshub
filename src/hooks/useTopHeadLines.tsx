import { useEffect } from "react";
import { useState } from "react";
import { Article } from "../models";
import { getTopHeadLines } from "../api/TopHeadlines";

const useTopHeadLines = (url: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopHeadLines = async () => {
      try {
        const data = await getTopHeadLines(url);
        if (data) {
          setArticles(data.articles);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTopHeadLines();
  }, []);

  return {
    articles: articles,
    errors: error,
    isLoading: isLoading,
  };
};

export default useTopHeadLines;
