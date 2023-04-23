import { configureStore } from '@reduxjs/toolkit';
import headlinesReducer from './headlines/headlinesSlice';
import techReducer from './technology/technologySlice';
import politicsReducer from './politics/politicsSlice';
import sportsReducer from './sports/sportsSlice';

const store = configureStore({
  reducer: {
    headline: headlinesReducer,
    technology: techReducer,
    politic: politicsReducer,
    sport: sportsReducer,
  },
});

export default store;
