import { create } from 'zustand';

export const useStore = create((set) => ({
    language: "es",
    updateLanguage: (lang) => set({ language: lang }),
}));