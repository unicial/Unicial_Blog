import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjectUpdateData = createAsyncThunk(
  "fetchProjectUpdate",
  async (data: any) => {
    const payload = data;
    return payload;
  }
);
