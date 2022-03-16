import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTechnologyData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "Technology";

const initialState: any = {
  technology: [],
};

const setTechnology = (state: any, data: any) => {
  state.technology = data;
};

export const TechnologyReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchTechnologyData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setTechnology(state, action.payload);
      }
    );
  },
});

export { fetchTechnologyData };
export default TechnologyReducer.reducer;
