const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542',
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
    //setTimeout(() => {conn.write("Move: up")}, 500);
    // setInterval(() => {conn.write("Move: up")}, 100);
    //conn.write("Move: up");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
}