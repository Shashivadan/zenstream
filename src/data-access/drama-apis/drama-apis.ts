"use server";

import type { IDetailedDrama, IDramaResponse, IDramaResult } from "@/types";
import { dramaURL } from "../api-contents";

export async function fetchPopularDrama(id = 1): Promise<IDramaResult[]> {
  const url = new URL(dramaURL.popular(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as IDramaResponse;
    return data.results;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}

export async function fetchDramaInfo(id: string): Promise<IDetailedDrama> {
  const url = new URL(dramaURL.dramaInfo(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as IDetailedDrama;
  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
