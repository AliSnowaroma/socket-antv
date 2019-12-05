export default (state = {money:0},action) => {
  switch(action.type){
    case 'receive_money':
      return {
        ...state,
        money:action.payload
      }
    default:
      return state
  }
}
