import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://newsapi.org/v2/everything?q=sports&apiKey=0cfd825dc05f4bb3a9924683753f6852';
export const getSportsNewsAsync = createAsyncThunk(
  'sports/getSportsNewsAsync',
  async () => {
    const response = await fetch(url);
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
