function field(fields){
  if (fields != ""){
    return fields
  } else {
    var field=class{
      constructor(){
        var fieldConstructor="Logs"
        this.fieldConstructor=fieldConstructor
        if(!this.fieldConstructor){
          return fieldConstructor
        }else{
          return this.fieldConstructor
        }
        field()
        var reachField=this.fieldConstructor
        console.log(reachField)
      }
      field(){
        this.fields="constructorMain"
        console.log(fields)
      }
    }
    console.log(field)
    if (field != fields){
      return field
    }else{
      return fields+":"+field
    }
  }
}
var argumentsOfDefintion=field(fields)
var fields = class{
  constructor(){
    var onlyField=fieldPlus("Logs")
    fieldMinus(onlyField)
  }
  fieldPlus(masterField){
    if (!this.numberField){
      var logger=masterField
      this.numberField=logger
    }
    return this.numberField
  }
  fieldMinus(field){
    this.numberField=field
    this.plusField=this.numberField
  }
}
console.log(fields)
var getMaster = class{
  constructor(){
    var plus="This is a property"
    var field=master
    var master=plus+field
    master(field, master, plus)
  }
  setPlus(plus){
    this.plus=plus
  }
  getMaster(master){
    if (!this.master){
      if (master==this.plus){
        this.master=this.field
      }else{
        this.master=master
      }
    }
    return this.master
  }
  master(field, master, plus){
    this.field=field
    this.master=getMaster(master)
    this.plus=setPlus(plus)
  }
}
console.log(getMaster)
class user{
  constructor(){
    setContents([1, 2, 3])
    setLogs("none")
    setSettingLogs("contents: "+this.contents)
  }
  setContents(contents){
    this.contents=contents
  }
  setLogs(logs){
    this.logs=logs
  }
  setSettingLogs(settingLogs){
    this.settingLogs=settingLogs
  }
}
user.contents=[1, 2, 3]
user.settingLogs="contents: "+[1, 2, 3]
user.logs="none"
var newLogs={
  content: user.contents,
  userLogs: user.settingLogs,
  writeLogs: function(content){
    var content=[1, 2, 3]
    content.forEach(contents =>{
      var course=class{
        constructor(){
          this.contents=user.contents
          this.settingLogs=user.settingLogs
          this.logs=user.logs
        }
      }
      console.log("User contents: "+course)
    })
  }
}
function callNewLogs(func){
  console.log(func)
}
callNewLogs(newLogs)
document.write("<h3>"+newLogs+"\n"+"Objects"+"</h3>")
newLogs.writeLogs(user.contents)
