export interface IInitialState {
  cats: Array<any[]>
  singleBreed: object
  isLoading: boolean
  errors: false
}

export interface IAction {
  type: string,
  payload: any
}