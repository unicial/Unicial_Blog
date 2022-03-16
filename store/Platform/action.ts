import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlatformData = createAsyncThunk(
  "fetchPlatform",
  async (data: any) => {
    const payload = data;
    return payload;
  }
);
