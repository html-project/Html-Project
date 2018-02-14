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
  var moduleExporting={
    export: function(contents){
      var contents=[1]
      contents.forEach(content => {console.log(consoles)})
    }
  }
  moduleExporting.export(posts.contents)
}
modules()
