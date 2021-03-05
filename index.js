var exec = require('child_process').execFile,
    path = require('path')

module.exports = function(inPath, outPath, done){
  var ogrCommand = ['-f' , 'KML', outPath, inPath]
  exec('ogr2ogr', ogrCommand, function(err, stdout, stderr){
    done(err)
  })
}
