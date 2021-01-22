import { IInitialState, IAction } from './interface';
import types from './types'

const initialState: IInitialState = {
  cats: [],
  singleBreed: [],
  chooseBreed: [],
  loadMore: true,
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
      return {
        ...state,
        chooseBreed: action.payload
      }
    case (types.SET_SINGLE_BREED):
      return {
        ...state,
        singleBreed: action.payload
      }
    case (types.SET_LOAD_MORE):
      return {
        ...state,
        loadMore: action.payload
      }
    default: {
      return state
    }
  }
}

export default store;