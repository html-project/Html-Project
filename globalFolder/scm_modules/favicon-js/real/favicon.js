document.register({
  render(){
    return {{event}}
  }
})
return (
  {this.results.app({
    event: [event]
  })},
  {this.props.header},
  {this.props.content},
  {this.props.footer}
)
module.export('application-component', {this.props.component})
event.register('post-body', function(){
  var posts=[event.getData()]
  return $('#post-body').set('application', new WebApplicationComponent(), undefined)
})
