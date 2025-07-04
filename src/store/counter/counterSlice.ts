// @TODO types

import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


// @ts-nocheck 
const initiralState = {
  count: 0,
};  

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initiralState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("incrementByAmount", action.payload);
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    }
  },
});

export const {increment, decrement,reset, incrementByAmount} = counterSlice.actions

export default counterSlice;