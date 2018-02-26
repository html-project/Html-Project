var plus=class{
  constructor(){
    if ("waring" != "waringTwo"){
      return "waring"
    }else{
      var structure="waring"
      return structure
<<<<<<< HEAD
    }
    this.model="waringTwo"
  }
  waring(){
    this.setPlus(this.model)
    var waring=this.getPlus()
    this.garble=masterWaring
    this.waring=waring
    this.toPlusSet=this.waring+this.garble
  }
  getPlus(){
    if(!this.plus){
      this.plus=this.model
      this.plusSet="waringTwo"
      this.plus={
        plusSet: this.plusSet,
        getPlusSet: function(){
          return this.plusSet
        },
        setPlusSet: function(plus){
          if (plus == null){
            console.log("Null station edited.")
          }else{
            this.plusSet=plus
          }
        }
      }
=======
>>>>>>> eef8a6c11e60fe892f193f53caf92a7932f37a05
    }
    return this.plus
  }
  setPlus(model){
    this.plus=model
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
