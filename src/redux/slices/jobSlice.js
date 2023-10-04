import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  initialized: false,
  isError: false,
  allJobs: [],
};
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      state.allJobs = action.payload;
      state.initialized = true;
      state.isError = false;
    },
    setError: (state) => {
      state.initialized = false;
      state.isError = true;
    },
    addJob: (state, action) => {
      state.jobs = [...state.jobs, action.payload];
      state.allJobs = [...state.allJobs, action.payload];
    },
    filterBySearch: (state, action) => {
      const filtered = state.allJobs
        .filter((job) => {
          return (
            (!action.payload.company ||
              job.company
                .toLowerCase()
                .includes(action.payload.company.toLowerCase())) &&
            (!action.payload.status ||
              job.status
                .toLowerCase()
                .includes(action.payload.status.toLowerCase())) &&
            (!action.payload.type ||
              job.type
                .toLowerCase()
                .includes(action.payload.type.toLowerCase()))
          );
        });
      state.jobs = [...filtered];
    },
    clearSearch: (state) => {
      state.jobs = [...state.allJobs];
    },
  },
});

export const { setJob, setError, addJob, filterBySearch, clearSearch } =
  jobSlice.actions;

export default jobSlice.reducer;
