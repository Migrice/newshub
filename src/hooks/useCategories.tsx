import { useEffect } from "react";
import { useState } from "react";
import { Source } from "../models";
import { getSources } from "../api/sourceService";

const useCategories = () => {
  const [sources, setSources] = useState<Source[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const data = await getSources();
        if (data) {
          setSources(data.sources);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSources();
  }, []);

  let all_sources = sources.map((source) => source.category);
  return {
    categories: [...new Set(all_sources)],
    errors: error,
    isLoading: isLoading,
  };
};

export default useCategories;
