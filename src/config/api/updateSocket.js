

let catchOptions = Object.create(null)  //用来缓存上次调用的参数
let UpSockets = {
  begin(){

  },
  apiList(){
    return {
      getMoney(options = catchOptions){
        catchOptions = {
          ...options
        }
        return fetch("http://localhost:3000/data",options).then(res => res.json())
      },
      stopMoney(options = catchOptions){
        catchOptions = {
          ...options
        }
        return fetch("http://localhost:3000/stop",options).then(res => res.json())
      }
    }
  }
}

export default UpSockets
