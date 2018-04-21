'use strict';
var index=new InsertPosts();
index.allow({
  remove: function(){
    if (index.content.exists() ){
      return true;
    }else{
      return false;
    }
  }
  add: function(){
    return true;
  }
  change: function(){
    if (index.content.exists() ){
      return true;
    }else{
      return false;
    };
  }
});
