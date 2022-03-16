import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk(
  "getAllArticle",
  async (data: any[]) => {
    const payload = data;
    return payload;
  }
);
