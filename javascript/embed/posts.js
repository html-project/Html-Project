var newProject={
  modules: null,
  getModules: function(){
    return this.modules
  },
  setModules: function(modules){
    this.modules=modules
  }
}
newProject.setModules([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
var log="This is a post insert to the resolver: "+newProject.getModules()
function alertAnotherFunction(){
    document.getElementById('myTextarea').innerHTML = '';
}
document.write("<script>function alertFunction(){event={preventDefault: function(defulat){this.defaultModule=defulat;}, noexpect: function(){event.preventDefault({mixins: [0, 1]})}}} </script><style>div {color: black; background: #333;}</style><div class='gray'><!-- Note: This tag is obsolete.--><center><textarea id='myTextarea' placeholder='Insert posts here' rows='4' cols='50'></textarea>"+"<form action='#'><button type='submit' onclick='alertFunction()'> Submit the changes</button>"+"<button type='reset' onClick='alertAnotherFunction()'>Defaulting this change </button></center></div>")
var exportingPosts={addedPosts: undefined}
if (document.getElementById('myTextarea').innerHTML){
  exportingPosts.addedPosts=document.getElementById('myTextarea').innerHTML
}else{
  exportingPosts.addedPosts=log
}
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
