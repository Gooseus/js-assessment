exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var len = arr.length,
      sum = 0;

    for(var i=0; i<len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    return arr.filter(function(el,idx) {
      return el !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var idx = arr.indexOf(item);
    while(idx!=-1) {
      arr.splice(idx,1);
      idx = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(acc,next,idx) {
      if(next==item) {
        acc++;
      }
      return acc;
    },0);
  },

  duplicates : function(arr) {
    var len = arr.length,
      dups = [];

    arr.sort();
    
    for(var i=0; i<len; i++) {
      if(arr[i] == arr[i+1] && dups.indexOf(arr[i]) == -1) {
        dups.push(arr[i]);
      }
    }

    return dups;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item*item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var len = arr.length,
      idxs = [];
      while(len--) {
        if(arr[len]==target) {
          idxs.push(len);
        }
      }
    return idxs;
  }
};
