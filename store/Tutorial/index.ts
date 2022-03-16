import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTutorialData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "Tutorial";

const initialState: any = {
  tutorial: [],
};

const setTutorial = (state: any, data: any) => {
  state.tutorial = data;
};

export const TutorialReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchTutorialData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setTutorial(state, action.payload);
      }
    );
  },
});

export { fetchTutorialData };
export default TutorialReducer.reducer;
