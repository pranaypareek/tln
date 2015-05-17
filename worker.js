var util = require('util');
var shell = require('shelljs');

var username = '';
//token needs to encoded
var token = '';

var cmd = 'curl -X POST https://github.com/signup_check/username' +
          '?value=' + username + 
          '&authenticity_token=' + token;
          
shell.exec(cmd,
  function (err, res) {
    //extracting out the API response message returned by cURL
    var scriptResponse = res.split("\n")[3];
    if (err !== null) {
      console.log('exec error: ' + err);
    }

    //res.split("\n")[3] spits array and returns the message 'Username is already taken'
    if(scriptResponse === 'Username is already taken') {
      console.log('\n\n ---> Message: You should know the Username IS already taken');
    } else {
      console.log('\n\n ---> Message: It is available, yaaaay!');
    }
});

//required reference material:
/*var sys = require('sys');
var exec = require('child_process').exec;
var util = require('util');
var shell = require('shelljs');
var res = null;
exec('~/path/to/script.sh',
  function (error, stdout, stderr) {
    sys.print('stdout: ', util.inspect(stdout));
    if (error !== null) {
      console.log('exec error: ' + error);
    }

    //res = stdout;

    if(res === "Username is already taken: numeric argument required") {
      console.log('You should know the Username IS already taken');
    } else {
      console.log('It is available, yaaaay!');
    }
});
*/
/*var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("stuff.sh", puts);

shell.exec('python qwerty.py ' + args, function(err, result) {
  if (err) {
      res.json('err');
  }
  var skills = [];
  fs.readFile('workfile', 'ascii', function(err, data) {
      console.log('workfile data: ', typeof data);
      skills = data.split(",");
      console.log('split array', skills);
      shell.echo('hello world!');
      res.json({
          skills: skills
      });
  });
});
*/
