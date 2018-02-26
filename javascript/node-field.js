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
<<<<<<< HEAD
  stations: null,
  setStationValue: function(stationValue){
    this.stations=stationValue
  },
=======
  stations: [1, 2, 4],
>>>>>>> eef8a6c11e60fe892f193f53caf92a7932f37a05
  getStationValue: function(){
    return this.stations
  }
}
projects.setStations("1, 2, 3, 4")
<<<<<<< HEAD
newProjects.setStationValue(projects.getStations() )
var stationValue={
  stationValue: newProjects.getStationValue(),
  setStationValue: function(stationValue){
    this.stationValue=stationValue
  }
}
stationValue.setStationValue([{
  stationValues: projects.getStations(),
  setStationValues: function(stations){
    this.stationValues=stations
  }
}])
var values=stationValue.stationValue
function printValues(value){
  if (value != null){
    console.log(value)
  }else{
    console.log(projects.getStations() )
  }
}
printValues(values)
=======
>>>>>>> eef8a6c11e60fe892f193f53caf92a7932f37a05
