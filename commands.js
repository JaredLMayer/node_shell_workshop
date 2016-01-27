var fs = require('fs'); 
module.exports = {

  pwd : function(param){
    return process.env.PWD;  
    this.echo(param);    
  }, 

  ls : function(param){
    console.log(param);
    var targetDir = (param.length !== 0) ? param.toString() : this.pwd();
    console.log(targetDir)
    fs.readdir(targetDir, function(err, files) {
      if (err) throw err;
        files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
  },

  date : function(){
    return new Date(); 
  },

  echo : function(param){
    return param; 
  },

  cat : function(fileName){
    var targetFile = fileName !== undefined ? fileName.toString() : "Nope";
    var contents = fs.readFileSync(targetFile, 'utf8');
    var contentsArr = contents.split("\n");
    var numLines = num ? parseInt(num) : 10; 
    var result = [];

    for(var i=0; i < contentsArr.length; i++){
      // console.log(contentsArr[i])
      result += contentsArr[i];
    }
    return result;    
  },

  head : function(){
    console.log(arguments[0])

      var targetFile = arguments[0][0] !== undefined ? arguments[0][0].toString() : "Nope";
      var contents = fs.readFileSync(targetFile, 'utf8');
      var contentsArr = contents.split("\n");
      var numLines = arguments[0][1] ? parseInt(arguments[0][1]) : 10; 
      var result = [];

      for(var i=0; i < numLines; i++){
        // console.log(contentsArr[i])
        result += contentsArr[i];
      }
      return result;    
  },

    tail : function(){
    console.log(arguments[0])

      var targetFile = arguments[0][0] !== undefined ? arguments[0][0].toString() : "Nope";
      var contents = fs.readFileSync(targetFile, 'utf8');
      var contentsArr = contents.split("\n");
      var numLines = arguments[0][1] ? parseInt(arguments[0][1]) : 10; 
      var result = [];

      for(var i=contentsArr.length - numLines; i < contentsArr.length; i++){
      // console.log(contentsArr[i])
      result += contentsArr[i];
      }
      return result;    
  },

  printPrompt : function(myOutput){
    process.stdout.write('You typed: ' + myOutput);
    process.stdout.write('\nprompt > ');
  }

}

