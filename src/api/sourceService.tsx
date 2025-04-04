import config from "../../config";
import { SourceResponse } from "../models";
import apiClient from "./apiClient";

export const getSources = async (): Promise<SourceResponse | undefined> => {
  try {
    const response = await apiClient.get(
      `/top-headlines/sources?apiKey=${config.NEWSAPIKEY}`,
    );
    if (response.data.status === "ok") {
      return response.data;
    } else {
      console.log("Unable to retrieve sources");
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
