'use strict';
var index=new InsertPosts();
index.allow({
  remove: function(){
    return true;
  }
  add: function(){
    return true;
  }
  change: function(){
    return false;
  }
});
