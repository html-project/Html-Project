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
  stations: [1, 2, 4],
  getStationValue: function(){
    return this.stations
  }
}
projects.setStations("1, 2, 3, 4")
