import { createAction } from "@reduxjs/toolkit";

export const API_IS_LOADING = createAction("API_IS_LOADING");
export const API_ERROR = createAction("API_ERROR");
export const API_SUCCESS = createAction("API_SUCCESS");
