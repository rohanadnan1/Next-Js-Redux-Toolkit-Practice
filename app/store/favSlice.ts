import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data as personData } from "../data";

interface FavState {
  fav: any[];
  data: any;
}

const initialState: FavState = {
  fav: [],
  data: {
    people: personData,
  },
};

const favSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      if (state.fav.findIndex((item) => item.id === action.payload.id) !== -1)
        return state;
      state.fav.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<any>) => {
      const index = state.fav.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.fav.splice(index, 1);
      }
    },
    removePerson: (state, action: PayloadAction<any>) => {
        const index = state.data.people.people.findIndex(
            (item:any) => item.id === action.payload.id
        );
        if (index !== -1) {
            state.data.people.people.splice(index, 1);
        }
    },
    addToData: (state, action: PayloadAction<any>) => {
        state.data.people.people.push(action.payload);
    }
  },
});

export const { addFav, removeFav, removePerson, addToData } = favSlice.actions;
export default favSlice.reducer;
