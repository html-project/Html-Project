document.register({
  render(){
    return {{event}}
  }
})
return (
  {this.results.app({
    event: [event]
  })},
  {this.applicationComponent, ({
    var events=this.event
    this.event.button={
      renderEvent('post-body', function(){
        var posts={event, {this.data.event}}
        this.results.posts=event
      }).set('application', new WebApplicationComponent(), undefined)
    }
  })},
  {this.props.header},
  {this.props.content},
  {this.props.footer}
)
module.export('application-component', {this.props.component})
module.export('class-component', {this.props.class})
event.register('post-body', function(){
  var posts=[event.getData()]
  return {this.applicationComponent({this.results.posts}, function(){
    return (
      {this.result.app({
        data: {this.data.posts}
      })}
    )
  }).setData()}
})
