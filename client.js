const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //logs message locally
  conn.on("connect", () => {
    console.log('Woo! I\'m connected.');
  });

  //sends message to server
  conn.on("connect", () => {
    conn.write("Name: KRH");
  });
   
  //retrieves data sent from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};