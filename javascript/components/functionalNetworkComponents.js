class preferedEvent{
  constructor(model, component){
    this.model=model
    this.components=this.model+component
  }
  preventSyntax(eventSyntax){
    insertComponents(eventSyntax)
    this.model="Prevented model: "+model
    var components=this.model+[1, 2, 3]
    this.components=components
  }
  insertComponents(event){
    event.preventDefault()
    this.component=$('#body').val()
    console.log("he")
  }
  toString(){
    return this.model
  }
}
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
                      this.actionValues=[1, 2]
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
              if (innerPropertyValue.value != [1, 3] ){
                innerPropertyValue.value=[1, 3]
              }else{
                innerPropertyValue.value=[1, 2]
                this.valueOfInnerProperty=innerPropertyValue.value
              }
            })
            if (contents != [1]){
              this.valueContents=contents
              this.contents=[1]
            }
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
      this.declareFunction=function(){
        this.changes=functionsToDeclare
        this.declaredFunction=this.changes
        var events=new preferedEvent(this.changes, this.declaredFunction)
        if (this.changes==this.declaredFunction){
          events.preventSyntax({insert: events.insertComponents() })
        }
      }
    })
  },
  propertyValueDefine: function(bar){
    this.bar=bar
    console.debug(bar)
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
