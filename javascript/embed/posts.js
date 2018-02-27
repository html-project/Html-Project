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
