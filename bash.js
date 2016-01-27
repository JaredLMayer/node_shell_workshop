var command = require('./commands')
// console.log(process.argv)
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  // console.log(command); 
  var splitCmd = cmd.split(" ");
  var cmd = splitCmd.shift(); 
  command.printPrompt(command[cmd](splitCmd));

});



//cat concatenates files and returns in terminal 