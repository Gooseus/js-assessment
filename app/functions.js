exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(greet) {
      return str + ', ' + greet;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(item) {
      return function() {
        return fn(item);
      }
    })
  },

  partial : function(fn, str1, str2) {
    return function(ending) {
      return fn(str1,str2,ending);
    }
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce(function(acc,next) {
      return acc + next;
    },0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    return fn.apply(null,args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    return function() {
      return fn.apply(null,args.concat(Array.prototype.slice.call(arguments)));
    }
  },

  curryIt : function(fn) {
    var len = fn.length;
    var args = [];
    
    return function currying(n) {
      args.push(n);
      if(args.length==len) {
        return fn.apply(null,args);
      } else {
        return currying;
      }
    }
  }
};
