import { Wish } from "@/types/wedding";

const STORAGE_KEY = "wedding_wishes_backup";

const DEFAULT_WISHES: Wish[] = [
];

export async function fetchWishes(): Promise<Wish[]> {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (endpoint && endpoint.trim().length > 0) {
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          return data.data;
        }
        return [];
      }
    } catch (err) {
      console.warn("Could not fetch wishes from Google Apps Script, falling back to local storage/default:", err);
    }
  }

  // Fallback to localStorage on browser or default wishes
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore localStorage read errors
    }
  }

  return DEFAULT_WISHES;
}

export async function submitWish(wish: Omit<Wish, "id" | "createdAt">): Promise<{ success: boolean; data?: Wish; error?: string }> {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
  const newWish: Wish = {
    ...wish,
    id: "wish-" + Date.now(),
    createdAt: new Date().toISOString(),
  };

  if (endpoint && endpoint.trim().length > 0) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWish),
        mode: "no-cors", // Google Apps Script often redirects or requires no-cors
      });
    } catch (err) {
      console.warn("Failed posting to Google Apps Script endpoint:", err);
    }
  }

  // Also persist to localStorage for instant client-side update
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const currentList: Wish[] = stored ? JSON.parse(stored) : [...DEFAULT_WISHES];
      const updatedList = [newWish, ...currentList];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch {
      // Ignore
    }
  }

  return { success: true, data: newWish };
}
