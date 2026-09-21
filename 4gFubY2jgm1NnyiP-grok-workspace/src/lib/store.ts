import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_CONTENT, type SiteContent } from "./content";

type ContentStore = {
  content: SiteContent;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  setContent: (content: SiteContent) => void;
  patch: (partial: Partial<SiteContent>) => void;
  reset: () => void;
};

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      content: DEFAULT_CONTENT,
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      setContent: (content) => set({ content }),
      patch: (partial) =>
        set((state) => ({ content: { ...state.content, ...partial } })),
      reset: () => set({ content: DEFAULT_CONTENT }),
    }),
    {
      name: "marco-va-content-v1",
      partialize: (state) => ({ content: state.content }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
