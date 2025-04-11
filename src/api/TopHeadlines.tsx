import { ArticleResponse } from "../models";
import apiClient from "./apiClient";

export const getTopHeadLines = async (
  url: string,
): Promise<ArticleResponse | undefined> => {
  try {
    const response = await apiClient.get(url);
    if (response.data.status === "ok") {
      return response.data;
    } else {
      console.log("Unable to retrieve topHeadLines");
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
