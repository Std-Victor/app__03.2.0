import { createSlice } from "@reduxjs/toolkit";

const list = JSON.parse(localStorage.getItem("userList")) ?? {
  client: [],
  admin: [],
};

const currentUser = Object.values(list)
  .reduce((arr, item) => [...arr, ...item])
  .filter((user) => user.isAuth )[0] ?? '';

const setUser = (userList, currentUser) => {
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};

const initialState = {
  userList: list,
  currentUser: currentUser,
  isAuth: currentUser ? true : false,
  msgError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userList[action.payload.type].push({
        ...action.payload.data,
        id:
          action.payload.type +
          "__" +
          state.userList[action.payload.type].length,
        isAuth: true,
      });
      state.isAuth = true;
      state.currentUser = {
        ...action.payload.data,
        id:
          action.payload.type +
          "__" +
          state.userList[action.payload.type].length,
      };

      setUser(state.userList, state.currentUser);
    },
    addUerAuth: (state, action) => {
      state.currentUser = state.userList[action.payload.type].filter(
        (user) =>
          user.email === action.payload.data.email &&
          user.password === action.payload.data.password
      )[0];
      state.currentUser !== undefined
        ? (state.isAuth = true)
        : (state.msgError = `There is no ${action.payload.type} record corresponding to the provided identifier. `);
      state.userList[action.payload.type] =
        state.currentUser !== undefined
          ? state.userList[action.payload.type].map((user) =>
              user.id === state.currentUser.id
                ? { ...user, isAuth: true }
                : { ...user, isAuth: false }
            )
          : state.userList[action.payload.type];
      setUser(state.userList, state.currentUser);
    },
    singOut: (state) => {
      state.userList[state.currentUser.id.split("__")[0]] = state.userList[
        state.currentUser.id.split("__")[0]
      ].map((user) => ({ ...user, isAuth: false }));
      state.isAuth = false;
      state.currentUser = '';
      setUser(state.userList, state.currentUser);
    },
  },
});

export const { addUserData, addUerAuth, getUserData, singOut } = userSlice.actions;
export default userSlice.reducer;
