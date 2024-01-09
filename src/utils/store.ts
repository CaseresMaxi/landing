import { create } from 'zustand'

type Store = {
    showContactMe: boolean
    toggleShowContactMe: () => void
}

export const useStore = create<Store>((set) => ({
    showContactMe: false,
    toggleShowContactMe: () => set((state: { showContactMe: boolean }) => ({ showContactMe: !state.showContactMe })),

}))