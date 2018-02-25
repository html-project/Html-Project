var topWindow=window.top
var centerWindow=window.center
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
    }else{
      return this.numberField
    }
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
        this.masterProjects=this.enterRoadStation+this.variable
      },
      getEnterRoadStation: function(){
        return this.enterRoadStation
      },
      setEnterRoadStation: function(enterRoadStation){
        this.enterRoadStation=enterRoadStation
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
user.briefLogs=[{
  getString: function(){
    return this.string
  },
  setString: function(string){
    this.string={
      string: string,
      convertToString: function(){
        if(this.string){
          return this.string
        }else{
          this.string=string
        }
      }
    }
  }
}]
user.userLogs=user.toString()
user.logs="none"
function getNewLogs(){
  var logs={
    settingLogs: users.settingLogs,
    logs: users.logs,
    property: class{
      constructor(){
        this.logs=user.logs
        this.settingLogs=user.settingLogs
        this.userLogs=user.userLogs
      }
      getLogs(){
        return this.logs
      }
      setLogs(logs){
        this.logs=logs
      }
      getSettingLogs(){
        return this.settingLogs
      }
      setSettingLogs(settingLogs){
        this.settingLogs=settingLogs
      }
      getUserLogs(){
        return this.userLogs
      }
      setUserLogs(userLogs){
        this.userLogs=userLogs
      }
    }
  }
  console.log(logs.property)
}
var newLogs={
  string: {
    string: function user(logProperty){
      if (!this.property){
        this.property=[{
          properties: logProperty
        }]
      }
      return this.property
    },
    property: [1, 2, 3, 4]
  },
  content: user.contents,
  userLogs: user.settingLogs,
  writeLogs: function(content){
    var content=user.contents
    content.forEach(contents =>{
      var course=class{
        constructor(){
          this.contents=users.contents
          this.settingLogs=users.settingLogs
          this.logs=users.logs
          var userSettingLogs=getSettingLogs()
          console.log(userSettingLogs)
          setSettingLogs(this.contents, this.logs)
        }
        getSettingLogs(){
          return this.settingLogs
        }
        setSettingLogs(log, define){
          this.settingLogs=log+define
        }
      }
      console.log("User contents: "+course)
    })
  }
}
function callNewLogs(func){
  console.log(func)
}
var properties=newLogs.string.string([1, 2, 3, 4])
callNewLogs(newLogs)
document.write(
  "<h3>"+newLogs+"\n"+"Objects: "+"</h3>"+properties
)
newLogs.writeLogs(user.contents)
getNewLogs()
