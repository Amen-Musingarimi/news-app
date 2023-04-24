import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTechNewsAsync = createAsyncThunk(
  'technologies/getTechNewsAsync',
  async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&apiKey=48710232470442d0ab583fe56e115168`
    );
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
