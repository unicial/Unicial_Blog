import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTechnologyData = createAsyncThunk(
  "fetchTechnology",
  async (data: any) => {
    const payload = data;
    return payload;
  }
);
