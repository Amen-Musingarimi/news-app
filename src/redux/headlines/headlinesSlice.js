import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=0cfd825dc05f4bb3a9924683753f6852';
export const getTopHeadlinesAsync = createAsyncThunk(
  'headlines/getTopHeadlinesAsync',
  async () => {
    const response = await fetch(url);
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
