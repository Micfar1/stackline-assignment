import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getStacklineData } from "../../api/StacklineAPI";
import {
  iStacklineData,
  iStacklineReviews,
  iStacklineSales,
} from "../../models/StacklineDataModel";
import { RootState } from "../store";

export const getStacklineApiData = createAsyncThunk(
  "stackline/getData",
  async () => {
    const response = await getStacklineData();
    return response;
  }
);

const initialState: {
  data: iStacklineData[];
  isLoading: boolean;
  error: string;
} = {
  data: [
    {
      id: "",
      title: "",
      image: "",
      subtitle: "",
      brand: "",
      reviews: [] as iStacklineReviews[],
      retailer: "",
      details: [] as string[],
      tags: [] as string[],
      sales: [] as iStacklineSales[],
    },
  ],
  isLoading: false,
  error: "",
};

export const stacklineSlice = createSlice({
  name: "StacklineData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStacklineApiData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getStacklineApiData.fulfilled,
        (state, action: PayloadAction<iStacklineData[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getStacklineApiData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to get Stackline data.";
      });
  },
});

export const selectStacklineData = (state: RootState) => state.stacklineData;

export default stacklineSlice.reducer;
