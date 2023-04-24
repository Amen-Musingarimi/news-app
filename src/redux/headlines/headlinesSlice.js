import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTopHeadlinesAsync = createAsyncThunk(
  'headlines/getTopHeadlinesAsync',
  async (countryCode) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=bb79e57bfe4645cfa7f0af77e3d74e2b`
    );
    if (response.ok) {
      const data = await response.json();
      const headlines = data.articles;
      return headlines;
    }
    return null;
  }
);

const headlinesSlice = createSlice({
  name: 'headlines',
  initialState: {
    headlines: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTopHeadlinesAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.headlines = newStore;
    });
  },
});

export default headlinesSlice.reducer;
