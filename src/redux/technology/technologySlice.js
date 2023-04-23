import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://newsapi.org/v2/everything?q=tech&apiKey=0cfd825dc05f4bb3a9924683753f6852';
export const getTechNewsAsync = createAsyncThunk(
  'technologies/getTechNewsAsync',
  async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const technologies = data.articles;
      return technologies;
    }
    return null;
  }
);

const technologiesNewsAsyncSlice = createSlice({
  name: 'technologies',
  initialState: {
    technologies: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTechNewsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.technologies = newStore;
    });
  },
});

export default technologiesNewsAsyncSlice.reducer;
