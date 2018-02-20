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
var argumentsOfDefintion=field(fields)
var getMaster = class{
  constructor(){
    var plus="This is a property"
    var master={
      property: function(){
        var properties=[1, 2, 3]
        properties.forEach(property =>{
          console.log(properties)
        })
      },
      extend: function(variable){
        this.enterRoadStation=variable.packages
        this.variable=variable+this.enterRoadStation
        var master=this.enterRoadStation
        console.log(master+this.variable)
      }
    }
    var field=master
    if (master != plus){
      this.master=master
      master.extend({
        packages: {
          extendFunction: function(extend){
            this.osx=extend
          }
        }
      })
    }else{
      this.master=null
    }
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
    this.userLogs=null
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
  toString(){
    return this.contents
  }
}
var users=new user()
user.contents=[1, 2, 3]
user.settingLogs="contents: "+[1, 2, 3]
user.userLogs=user.toString()
user.logs="none"
function getNewLogs(){
  var logs={
    settingLogs: users.settingLogs,
    logs: users.logs,
    property: class{
      constructor(){
        var logs=users.logs
        var settingLogs=users.settingLogs
        var userLogs=users.userLogs
      }
    }
  }
  console.log(logs.property)
}
var newLogs={
  content: user.contents,
  userLogs: user.settingLogs,
  writeLogs: function(content){
    var content=[1, 2, 3]
    content.forEach(contents =>{
      var course=class{
        constructor(){
          this.contents=users.contents
          this.settingLogs=users.settingLogs
          this.logs=users.logs
          var userSettingLogs=getSettingLogs()
          console.log(userSettingLogs)
        }
        getSettingLogs(){
          return this.settingLogs
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
document.write(
  "<h3>"+newLogs+"\n"+"Objects"+"</h3>"
)
newLogs.writeLogs(user.contents)
getNewLogs()
