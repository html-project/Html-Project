var functioningDate={
  combineValue: function(syntax){
    this.syntax=syntax
    var functionsToDeclare=class{
      constructor(){
        this.value=syntax
      }
    }
    var contents=[1]
    contents.forEach(content =>{
      console.log(functionsToDeclare)
    })
  },
  propertyValueDefine: function(bar){
    this.bar=bar
    console.log(bar)
  }
}
functioningDate.propertyValueDefine(
  class structure{
    constructor(){
      this.syntax="Throws SyntaxError"
      functioningDate.combineValue(this.syntax)
    }
  }
)
