import { AppDispatch } from "../store"
import { postsSlice } from './postsSlice'

import { BASE_URL } from '../constants'
import {onePostSlice} from "./onePostSlice";

export const requestPosts = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await fetch(`${BASE_URL}?limit=10&skip=${page}0`, {
        headers: {
          },
          method: 'GET',
    });
    const responseJSON = await response.json();
    dispatch(postsSlice.actions.postsFetchingSuccess(responseJSON))
  } catch (error) {
      if (error instanceof Error) {
        dispatch(postsSlice.actions.postsFetchingError(error.message))
        return;
      }
      console.log(error);
  }
};

export const requestPostsByString = (value: string, page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postsSlice.actions.postsFetching());
    const response = await fetch(`${BASE_URL}/search?q=${value}&limit=10&skip=${page}0`, {
        headers: {
          },
          method: 'GET',
    });
    console.log(`${BASE_URL}/search?q=${value}&limit=10&skip=${page}0`)
    const responseJSON = await response.json();
    dispatch(postsSlice.actions.postsFetchingSuccess(responseJSON))
  } catch (error) {
      if (error instanceof Error) {
        dispatch(postsSlice.actions.postsFetchingError(error.message))
        return;
      }
      console.log(error);
  }
};

export const requestPost = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(onePostSlice.actions.postFetching());
    const response = await fetch(`${BASE_URL}/${id}`, {
        headers: {
          },
          method: 'GET',
    });
    const responseJSON = await response.json();
    dispatch(onePostSlice.actions.postFetchingSuccess(responseJSON))
  } catch (error) {
      if (error instanceof Error) {
        dispatch(onePostSlice.actions.postFetchingError(error.message))
        return;
      }
      console.log(error);
  }
};





