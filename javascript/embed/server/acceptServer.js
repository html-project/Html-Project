var routesAccepting: {
  name: 'FlowRoute'
  localhost: 'https://localhost:3000/'
  serverroute: 'localhost:3000'
  getServerRoute: function(){
    return this.serverroute
  }
}
var serverRoutes=routesAccepting.getServerRoute()
console.log(serverRoutes)
function acceptServers(){
  var localhost="localhost:3000/"
  var name="FlowRoute"
}
