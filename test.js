var util = require('util');
var shell = require('shelljs');

var cmd = 'curl -X POST https://github.com/signup_check/username' +
          '?value=aak' +
          '&authenticity_token=' +
          'UqNiayqrKea82%2BVQ6I98Z1SrUwIcWDCeaYJTiK' +
          '%2BFfhicDpKiIXSA9qVMTbpRoM16u6YPLmc7Y4YyOPu%2FAbwk4A%3D%3D';
shell.exec(cmd,
  function (err, res) {
    //console.log('-------------------->', res.split("\n")[3]);
    var scriptResponse = res.split("\n")[3];
    if (err !== null) {
      //console.log('exec error: ' + err);
    }

    if(scriptResponse === 'Username is already taken') {
      console.log('\n\n ---> Message: You should know the Username IS already taken');
    } else {
      console.log('\n\n ---> Message: It is available, yaaaay!');
    }
});

/*var sys = require('sys');
var exec = require('child_process').exec;
var util = require('util');
var shell = require('shelljs');
var res = null;
exec('~/Pranay_disk/hack-stuff/ghUsernames/stuff.sh',
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

shell.exec('python skills.py ' + linkedinLink, function(err, result) {
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