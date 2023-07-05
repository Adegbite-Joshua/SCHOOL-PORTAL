import { createSlice, current } from "@reduxjs/toolkit";
import socketClient from 'socket.io-client'


export const socketIO = createSlice({
    name: 'socketIO',
    initialState:{
        socket: socketClient('http://localhost:7777/student'),
        io: {}
    },
    reducers: {
        setSocket: (state, action)=>{
            state.socket = action.payload
        }
    }

});

export const {setSocket} = socketIO.actions;
export default socketIO.reducer;

