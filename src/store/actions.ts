import types from './types'
import {IAction} from './interface';

export const setLoader = (payload: boolean): IAction => ({
  type: types.SET_LOADER,
  payload
})

export const setError = (payload: boolean): IAction => ({
  type:types.SET_ERROR,
  payload
})

export const loadCats = (payload: any[]): IAction => ({
  type: types.LOAD_CATS,
  payload
})

export const setBreed = (payload: string): IAction => ({
  type: types.SET_BREED,
  payload
})