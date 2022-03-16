import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProjectUpdateData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "ProjectUpdate";

const initialState: any = {
  projectUpdate: [],
};

const setProjectUpdate = (state: any, data: any) => {
  state.projectUpdate = data;
};

export const ProjectUpdateReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchProjectUpdateData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setProjectUpdate(state, action.payload);
      }
    );
  },
});

export { fetchProjectUpdateData };
export default ProjectUpdateReducer.reducer;
