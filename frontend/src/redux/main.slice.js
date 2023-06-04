import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  loading: "",
  insult: "",
  error: "",
  fox: "",
  dog: "",
  cat: "",
};

const catLoad = createAsyncThunk(
  "main/catLoad",

  async (_, { rejectWithValue }) => {
    try {
      const respone = await fetch("/api/cat");

      const data = await respone.json();

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const dogLoad = createAsyncThunk(
  "main/dogLoad",

  async (_, { rejectWithValue }) => {
    try {
      const respone = await fetch("/api/dog");

      const data = await respone.json();

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const foxLoad = createAsyncThunk(
  "main/foxLoad",

  async (_, { rejectWithValue }) => {
    try {
      const respone = await fetch("/api/fox");

      const data = await respone.json();

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const insultLoad = createAsyncThunk(
  "main/insultLoad",

  async (_, { rejectWithValue }) => {
    try {
      const respone = await fetch("/api/insult");

      const data = await respone.json();

      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    clearImage(state) {
      state.cat = "";
      state.dog = "";
      state.fox = "";
      state.insult = "";
    },
    closeBurger(state) {
      // state.active = false;
    },
    toggleBurger(state) {
      state.active = !state.active;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(catLoad.fulfilled, (state, action) => {
        state.cat = action.payload;
        state.loading = false;
      })
      .addCase(catLoad.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(catLoad.pending, (state) => {
        state.error = false;
        state.cat = "";
        state.loading = true;
      })
      .addCase(dogLoad.fulfilled, (state, action) => {
        state.dog = action.payload;
        state.loading = false;
      })
      .addCase(dogLoad.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(dogLoad.pending, (state) => {
        state.error = false;
        state.dog = "";
        state.loading = true;
      })
      .addCase(foxLoad.fulfilled, (state, action) => {
        state.fox = action.payload;
        state.loading = false;
      })
      .addCase(foxLoad.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(foxLoad.pending, (state) => {
        state.error = false;
        state.fox = "";
        state.loading = true;
      })
      .addCase(insultLoad.fulfilled, (state, action) => {
        state.insult = action.payload;
        state.loading = false;
      })
      .addCase(insultLoad.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(insultLoad.pending, (state) => {
        state.error = false;
        state.insult = "";
        state.loading = true;
      });
  },
});

export { catLoad, dogLoad, foxLoad, insultLoad };

export const { clearImage, toggleBurger, closeBurger } = mainSlice.actions;

export default mainSlice.reducer;
