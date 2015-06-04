var _ = require('underscore');
var async = require('async');

var i, j, k = 0;
var arr = [];

function convertToChars(data, cb) {
  if(Array.isArray(data)) {
    var res = _.map(data, function(ele) {
      return String.fromCharCode(ele);
    });
    cb(res.join(''));
  }
}

var data = 'a'.charCodeAt();

for(i=0; i<26; i++) {
  var tmp = [];
  tmp.push(data + i);
  //[a]

  for(j=0; j<26; j++) {
    tmp.push(data + j);
    //[a, a]

    for(k=0; k<26; k++) {
      tmp.push(data + k);
      //[a, a, a]

      arr.push(tmp);
      //[[a, a, a]]

      tmp = [];

      /* to avoid:
        [ 'z', 'y', 'w' ],
        [ 'z', 'y', 'x' ],
        [ 'z', 'y', 'y' ],
        [ 'z', 'y', 'z' ],
        [ 'z', 'y', 'z', 'a' ],
      */
      if(k !== 25)
        tmp.push(data + i);
      tmp.push(data + j);
    }
  }
}

var arrRev = [];

async.each(arr, function(ele, cb) {
  convertToChars(ele, function(convArr) {
    arrRev.push(convArr);
    cb();
  });
}, function(err) {
  console.log(arrRev);
  console.log(arrRev.length);
});
