var classing=class{
  constructor(){
    valueMinimizing()
  }
  valueMinimizing(){
    this.function="This is a function"
    this.values="This is some values here"
  }
}
console.log(classing)
function addSomething(){
  var functionLevel="1"
  if (functionLevel = ""){
    console.log(functionLevel)
  }else{
    console.log(classing)
  }
}
addSomething()
var projects={
  setStations: function(station){
    this.stations=station
  },
  getStations: function(){
    return this.stations
  }
}
var newProjects={
  stations: null,
  setStationValue: function(stationValue){
    this.stations=stationValue
  },
  getStationValue: function(){
    return this.stations
  }
}
projects.setStations("1, 2, 3, 4")
newProjects.setStationValue(projects.getStations() )
var stationValue={
  stationValue: newProjects.getStationValue(),
  setStationValue: function(stationValue){
    this.stationValue=stationValue
  },
  getStationValue: function(argument){
    if (argument != undefined){
      return this.stationValue[argument]
    }else{
      return this.stationValue
    }
  }
}
stationValue.setStationValue([
  {
    stationValues: projects.getStations(),
    setStationValues: function(stations){
      this.stationValues=stations
    }
  }, {
    modules: [{
      module: users.module,
      getModule: function(){
        return this.module
      },
      setModule: function(modules){
        this.module=modules
      }
  }]
}])
stationValue.getStationValue([1]).modules[0].setModule(stationValue)
var values=stationValue.getStationValue([1]).modules
function printValues(value){
  if (value != null){
    console.log(value)
  }else{
    if (stationValue.getStationValue() ){
      console.log(stationValue.getStationValue())
    }else{
      console.log(projects.getStations())
    }
  }
}
printValues(values)
