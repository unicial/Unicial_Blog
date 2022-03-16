import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTutorialData = createAsyncThunk(
  "fetchTutorial",
  async (data: any) => {
    const payload = data;
    return payload;
  }
);
