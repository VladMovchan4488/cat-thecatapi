import types from './types'
import {IAction} from './interface';
import { ICat } from '../shared/interface'

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

export const setBreed = (payload: ICat[]): IAction => ({
  type: types.SET_BREED,
  payload
})

export const setSingleBreed = (payload: ICat[]): IAction => ({
  type: types.SET_SINGLE_BREED,
  payload
})

export const setLoadMore = (payload: boolean): IAction => ({
  type: types.SET_LOAD_MORE,
  payload
})
