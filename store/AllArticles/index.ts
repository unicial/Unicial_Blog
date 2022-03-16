import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "AllArticle";

const initialState: any = {
  allArticle: [],
};

const setAllArticle = (state: any, data: any) => {
  state.allArticle = data;
};

export const allArticleReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchAllData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAllArticle(state, action.payload);
      }
    );
  },
});

export { fetchAllData };
export default allArticleReducer.reducer;
