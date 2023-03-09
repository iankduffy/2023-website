import { create } from 'zustand'

export interface ContentStore {
  currentHeader: string | null
  setHeader: ({id}: {id: string}) => void
}

export const articleContentStore = create<ContentStore>((set) => ({
  currentHeader: null, 
  setHeader: ({id}: {id: string}) => {
    try {
      set(() => ({currentHeader: id}))
    } catch (err) {
      console.log(err)
    }
  }
}))