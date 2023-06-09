import { createSlice } from '@reduxjs/toolkit';
import { getUsersJsoned } from './loaders';


export const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            const { id, username, password } = action.payload;
        
            const user = {
                id: id,
                username: username,
                password: password,
            };
            console.log(user)


            return [...state, user];
        },
    },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;


// updateTodo: (state, action) => {
//     const { id, text } = action.payload;

//     const todo = state.find((todo) => todo.id === id);
//     todo.text = text;
//   },
//   deleteTodo: (state, action) => {
//     return state.filter((todo) => todo.id !== action.payload);
//   },