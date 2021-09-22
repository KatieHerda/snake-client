// setup interface to handle user input from stdin.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//Function to terminate connection from key board input on client side.
const handleUserInput = function (keyBoardInput) {
  if (keyBoardInput === '\u0003') {
    process.exit();
  }
};

setupInput();

module.exports = {setupInput};