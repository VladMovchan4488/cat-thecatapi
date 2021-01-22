export interface IInitialState {
  cats: Array<any[]>
  singleBreed: Array<any[]>
  chooseBreed: object
  loadMore: boolean
  isLoading: boolean
  errors: boolean
}

export interface IAction {
  type: string,
  payload: any
}