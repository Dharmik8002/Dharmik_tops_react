import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// showuser data
export const showUser = createAsyncThunk(
  "showUser",
  async (arg, { rejactWithvalue }) => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      const resp = res.data;
      return resp;
    } catch (error) {
      return rejactWithvalue(error);
    }
  }
);

// create new user

export const createUser = createAsyncThunk(
  "createUser",
  async (argu, { rejactWithvalue }) => {
    try {
      const res = await axios.post("http://localhost:3001/users", argu);
      const resp = res.data;
      return resp;
    } catch (error) {
      return rejactWithvalue(error);
    }
  }
);

// Delete user

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejactWithvalue }) => {
    try {
      const res = await axios.delete(`http://localhost:3001/users/${id}`);
      const resp = res.data;
      return resp;
    } catch (error) {
      return rejactWithvalue(error);
    }
  }
);

// Edit user

export const editUser = createAsyncThunk(
  "editUser",
  async (data, { rejactWithvalue }) => {
    try {
      const res = await axios.put(
        `http://localhost:3001/users/${data.id}`,
        data
      );
      const resp = res.data;
      return resp;
    } catch (error) {
      return rejactWithvalue(error);
    }
  }
);

export const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    users: [],
    loading: false,
    error: "",
  },
  reducers: {
    userpendig: (state) => {
      state.loading = true;
    },
    userfullfied: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    userrejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // read
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // create
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      }) 
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // delete
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((data) => data.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // edit
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map(
          (item) => (item.id = action.payload ? action.payload : item)
        );
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { userpendig, userfullfied, userrejected } = AdminSlice.actions;
export default AdminSlice.reducer;
