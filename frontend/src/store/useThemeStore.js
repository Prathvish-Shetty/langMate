import {create} from "zustand"

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("langMate-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("langMate-theme", theme)
    set({theme})
  }
}))