import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAnnouncementData } from "./action";
// import type { BidContractstate } from './types';

const PREFIX = "Announcement";

const initialState: any = {
  announcement: [],
};

const setAnnouncement = (state: any, data: any) => {
  state.announcement = data;
};

export const AnnouncementReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      fetchAnnouncementData.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAnnouncement(state, action.payload);
      }
    );
  },
});

export { fetchAnnouncementData };
export default AnnouncementReducer.reducer;
