var _ = require('underscore');
var async = require('async');

var i, j, k = 0;
var arr = [];
var data = 'a'.charCodeAt();

function convertToChars(data, cb) {
  if(Array.isArray(data)) {
    var res = _.map(data, function(ele) {
      return String.fromCharCode(ele);
    });
    cb(res.join(''));
  }
}

for(i=0; i<26; i++) {
  var tmp = [];
  tmp.push(data + i);

  for(j=0; j<26; j++) {
    tmp.push(data + j);

    for(k=0; k<26; k++) {
      tmp.push(data + k);
      arr.push(tmp);
      tmp = [];
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
