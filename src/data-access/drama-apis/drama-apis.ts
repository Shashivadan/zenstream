"use server";

import type { IDetailedDrama, IDramaResponse } from "@/types";
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

export async function fetchDramaInfoById(id: string): Promise<IDetailedDrama> {
  const url = new URL(dramaURL.dramaInfo(id));

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 }, // 7 days
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as IDetailedDrama;
    return data

  } catch (error) {
    console.error("Failed to fetch TV carousel data:", error);
    throw error;
  }
}
