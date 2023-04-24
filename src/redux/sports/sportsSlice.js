import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getSportsNewsAsync = createAsyncThunk(
  'sports/getSportsNewsAsync',
  async (sport) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${sport}&apiKey=48710232470442d0ab583fe56e115168`
    );
    if (response.ok) {
      const data = await response.json();
      const sports = data.articles;
      return sports;
    }
    return null;
  }
);

const sportsNewsAsyncSlice = createSlice({
  name: 'sports',
  initialState: {
    sports: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSportsNewsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.sports = newStore;
    });
  },
});

export default sportsNewsAsyncSlice.reducer;
