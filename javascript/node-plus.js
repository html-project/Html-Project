var plus=class{
  constructor(){
    if ("waring" != "waringTwo"){
      return "waring"
    }else{
      var structure="waring"
      return structure
    }
  }
  waring(){
    var masterWaring=this.setPlus(this.plus)
    var waring=this.getPlus()
    this.garble=masterWaring
    this.waring=waring
    this.toPlusSet=this.waring+this.garble
  }
}
function callPlus(){
  console.log(plus)
}
callPlus()
