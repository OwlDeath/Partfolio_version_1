import { create } from "zustand";
import axios from "axios";
import { usersApiUrl } from "@store/url";
import {UpcomingStateMovies } from "@src/types/types";

const usersStore = create<UpcomingStateMovies> ((set) => ({

  repos: null,
  fetchData: async () => {
    try {
      const url2 = `${usersApiUrl}/OwlDeath/repos`;
      const response2 = await axios.get(url2);
      set({ repos: response2.data });
      
      
    } catch (error) {
      console.error("Произошла ошибка в Users", error);
    }
  }
}));
export const selectRepos = (state:UpcomingStateMovies) => state.repos;
export default usersStore;
