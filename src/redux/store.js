import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './news/companiesSlice';

const store = configureStore({
  reducer: {
    company: companiesReducer,
  },
});

export default store;
