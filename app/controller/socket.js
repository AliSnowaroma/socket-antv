function SocketInit(io){
  io.origins((origin, callback) => {
      if (origin !== 'http://localhost:9000') {
          return callback('origin not allowed', false);
      }
      callback(null, true);
  });
  io.on("connection", function(socket){
      socket.on('sendmsg',function(data){
          console.log(data)
      })
  })
}

module.exports = SocketInit;
