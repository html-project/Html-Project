var exportingPosts={addedPosts: undefined}
class posts{
  constructor(){
    this.contents=[1]
    this.logs=null
    this.consoleLogs=null
  }
}
function modules(){
  var consoles=class{
    constructor(){
      this.selfs="Exporting function"
      this.consoleSelfExports=this.selfs
    }
  }
  var exporting={
    setMixins: function(mixin){
      users.mixins=mixin
    },
    getMixins: function(argument){
      if (argument != undefined){
        return users.mixins[argument]
      }else{
        return users.mixins
      }
    }
  }
  var moduleExporting={
    export: function(contents){
      var contents=[1]
      contents.forEach(content => {console.log(consoles)})
    }
  }
  exporting.setMixins([{
    mixin: undefined,
    clearMixins: function(){
      this.mixin=undefined
    },
    addMixins: function(mixins){
      this.mixin=this.mixin+mixins
    }
  }])
  moduleExporting.export(posts.contents)
  if (exporting.getMixins([0]).mixin == undefined){
    exporting.getMixins([0]).addMixins(moduleExporting)
  }else{
    exporting.getMixins([0]).clearMixins()
  }
}
modules()
var eachPost=new posts()
if (!posts.content){
  posts.content=posts.contents
}else{
  exportingPosts.addedPosts=posts.contents
  document.write("<!--<font size='2'>You might be have looking for: <a href='http://www.localhost8000.com' style='color: rgb(255, 128,0)'>localhost:8000</a></font>-->")
}
