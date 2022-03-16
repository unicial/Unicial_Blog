import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnnouncementData = createAsyncThunk(
  "fetchAnnouncement",
  async (data: any) => {
    const payload = data;
    return payload;
  }
);
