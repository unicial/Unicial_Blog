import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlatformData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "Platform";

const initialState: any = {
  platform: [],
};

const setPlatform = (state: any, data: any) => {
  state.platform = data;
};

export const PlatformReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchPlatformData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setPlatform(state, action.payload);
      }
    );
  },
});

export { fetchPlatformData };
export default PlatformReducer.reducer;
