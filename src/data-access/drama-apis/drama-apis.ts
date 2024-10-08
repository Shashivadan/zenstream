"use server";

import type {
  IDetailedDrama,
  IDramaResponse,
  IDramaSearchResults,
  IDramaStreamingData,
} from "@/types";
import { dramaURL } from "../api-contents";

export async function fetchPopularDrama(id = 1): Promise<IDramaResponse> {
  const url = new URL(dramaURL.popular(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IDramaResponse;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchDramaInfoById(
  id: string,
): Promise<IDetailedDrama | null> {
  const url = new URL(dramaURL.dramaInfo(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      return null;
    }

    if (response.status === 404) {
      return null;
    }
    const data = (await response.json()) as IDetailedDrama;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchDramaStreamingLinks(
  episodeId: string,
  mediaId: string,
  server?: "asianload" | "mixdrop" | "streamtape" | "streamsb",
): Promise<IDramaStreamingData | null> {
  const url = new URL(dramaURL.streamLinks(episodeId, mediaId, server));
  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as IDramaStreamingData;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
export async function fetchDramaSearch(
  search: string,
  page = 1,
): Promise<IDramaSearchResults | null> {
  const url = new URL(dramaURL.search(search, page));
  try {

    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as IDramaSearchResults;
    return data;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
