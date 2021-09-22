// setup interface to handle user input from stdin.
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  //Function to terminate connection from key board input on client side.
  const handleUserInput = function (keyBoardInput) {
    if (keyBoardInput === '\u0003') {
      process.exit();
    }
    switch (keyBoardInput) {
      case 'w':
        connection.write("Move: up");
        break;
      case 'a':
        connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right")
        break;
    };
            
  }
    stdin.on("data", handleUserInput);
    return stdin;
};

module.exports = {setupInput};