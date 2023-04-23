import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://newsapi.org/v2/everything?q=politics&apiKey=0cfd825dc05f4bb3a9924683753f6852';
export const getPoliticsNewsAsync = createAsyncThunk(
  'politics/getPoliticsNewsAsync',
  async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const politics = data.articles;
      return politics;
    }
    return null;
  }
);

const politicsNewsAsyncSlice = createSlice({
  name: 'politics',
  initialState: {
    politics: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPoliticsNewsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.politics = newStore;
    });
  },
});

export default politicsNewsAsyncSlice.reducer;
