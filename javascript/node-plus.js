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
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}

//usage:
readTextFile("localhost:3000/html/contest.json", function(text){
    var data = JSON.parse(text)
    console.log(data)
})
