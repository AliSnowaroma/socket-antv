
const dispatchImitation1 = ({ dispatch, getState }) => next => action => {
	console.log('中间件1')
  next(action)
  console.log('中间件1后')
}
const dispatchImitation2 = ({ dispatch, getState }) => next => action => {
	console.log('中间件2')
  next(action)
  console.log('中间件2后')
}
