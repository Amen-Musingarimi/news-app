import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies';
export const getCompaniesAsync = createAsyncThunk(
  'companies/getCompaniesAsync',
  async () => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const companies = data;
      return companies;
    }
    return null;
  },
);

export const getCompanyProfileAsync = createAsyncThunk(
  'company/getCompanyProfile',
  async (companyName) => {
    const response = await fetch(
      `https://588fc30f7458d612002df0d2.mockapi.io/api/v1/companies?filter=${companyName}`,
    );
    if (response.ok) {
      const data = await response.json();
      const company = data;
      return company;
    }
    return null;
  },
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    companies: [],
    companyProfiles: [],
  },
  reducers: {
    clearCompanyProfile: (state) => {
      state.companyProfiles = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCompaniesAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.companies = newStore;
    });

    builder.addCase(getCompanyProfileAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newProfile = action.payload;
      updatedState.companyProfiles = newProfile;
    });
  },
});

export const { clearCompanyProfile } = companiesSlice.actions;

export default companiesSlice.reducer;
