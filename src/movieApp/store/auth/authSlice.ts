import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../types/userTypes';

interface IInitialState{
    status:string, //'authenticated','not-authenticated',checking
    user:IUser,
    errorMessage:string | null,

}


const initialState:IInitialState = {
    status:'checking', //'authenticated','not-authenticated',checking
    user:{},
    errorMessage:null,
}

export const authSlice = createSlice({
    

    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state, /* action */ ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = null;
        },
        onLogin: (state, action: PayloadAction<IUser>) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = null;
        },
        onLogout: (state,action: PayloadAction<string>) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = action?.payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null;
    
    
        },
    }
});
export const { onChecking,onLogin,onLogout,clearErrorMessage } = authSlice.actions;	

