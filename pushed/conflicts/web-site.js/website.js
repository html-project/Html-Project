if (!module.import('application-component') ){
  var modules={{module.set('application', new WebApplicationComponent(), undefined)}}
  module.hook(modules)
}else{
  var modules={{module.get('application', function(){
    module.hook( new [this.application.name])
  }}}
}
