import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url =
  'https://newsapi.org/v2/everything?q=tech&apiKey=bb79e57bfe4645cfa7f0af77e3d74e2b';
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
