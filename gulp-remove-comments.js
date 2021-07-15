const through2 = require('through2');
const gutil = require('gulp-util');

const PLUGIN_NAME = 'gulp-remove-comments'; 
 module.exports = function(){
  return through2.obj(function(file, enc, cb){
    
    const regExp = new RegExp("//.*\n", "gm");
    if(file.isNull()){
      this.push(file);
      return cb();
    }

    if(file.isStream()){
      this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return cb();
    }

    let contents = file.contents.toString();
    contents = contents.replace(regExp, "").trim();
    
    file.contents = new Buffer(contents);

    this.push(file);
    cb();
  });
 } 