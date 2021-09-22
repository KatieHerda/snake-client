// setup interface to handle user input from stdin.
let connection;

const setupInput = (conn) => {
  connection = conn;
  
  //standard input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  //Function to terminate connection from key board input on client side.
  const handleUserInput = function(keyBoardInput) {
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
      connection.write("Move: right");
      break;
    case 'p':
      connection.write("Say: let's go!");
      break;
    case 'o':
      connection.write("Say: hissssssss");
      break;
    }
            
  };
  //standard input with event handler that is listening to data input (key input) and when it hears, it then calls handleUserInput function.
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};