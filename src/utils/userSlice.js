import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const user = {
        id: action,
        text: action.payload,
      };


      return [...state, todo];
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.find((todo) => todo.id === id);
      todo.text = text;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;