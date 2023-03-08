import { create } from 'zustand'

export const articleContentStore = create((set) => ({
  currentHeader: null, 
  setHeader: ({id}: {id: string}) => {
    try {
      console.log({id})
      set(() => ({currentHeader: id}))
    } catch (err) {
      console.log(err)
    }
  }
}))