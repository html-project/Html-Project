var functioningDate={
  innerHTML: {
    combinePropertyValue: function(){
      var syntaxes=[1]
      syntaxes.forEach(values => {
        this.syntaxValues=syntaxes
        this.functionMastering=class{
          constructor(){
            this.mastering="mastering"+syntaxes
            returnValues(this.mastering)
          }
          returnValues(mastering){
            if (this.values != ""){
              this.values=this.mastering
            }else{
              this.mastering=mastering
              return this.mastering
            }
          }
        }
      })
    },
    outerClass: {
      combineSyntax: function(){
        var classToFunction=class{
          constructor(){
            this.values=[1, 2, 3]
            var contents=[1]
            contents.forEach(content => {
              var Posts={
                property: [1, 2, 3],
                innerProperty: {
                  value: [1, 2],
                  combine: function(value){
                    var value=this.values
                    if (this.values != null){
                      value=this.values
                    }else{
                      value=[1, 2, 3]
                    }
                    value.forEach(values =>{
                      console.log("hello station!")
                    })
                  }
                },
                getInnerProperty: function(){
                  return this.innerProperty
                }
              }
              Posts.innerProperty.combine([1, 2, 3, 4])
              var innerPropertyValue=Posts.getInnerProperty()
            })
          }
        }
      }
    }
  },
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
