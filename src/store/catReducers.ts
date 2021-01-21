import { IInitialState, IAction } from './interface';
import types from './types'

const initialState: IInitialState = {
  cats: [],
  singleBreed: {},
  isLoading: false,
  errors: false,
}

const store = (state = initialState, action: IAction) => {
  switch (action.type) {
    case (types.SET_LOADER):
      return {
        ...state,
        isLoading: action.payload
      }
    case (types.SET_ERROR):
      return {
        ...state,
        errors: true
      }
    case (types.LOAD_CATS):
      return {
        ...state,
        cats: action.payload
      }
    case (types.SET_BREED):
      const singleBreed = state.cats.filter((cat: any) => {
        if (cat.name === action.payload) {
          return cat
        }
      })
      return {
        ...state,
        singleBreed
      }
    default: {
      return state
    }
  }
}

export default store;