takeAction(this.props.component, function(){
  return(
    <div form="div-component-class" id="component">
      <master action={this.props.component}></master>
      <form id="insertPosts-body">
        <action key=map(function(){
          return {
            contents: [{
              key: this.insertPosts
            }]
          }
        })>
        <div className='component-class-form' id='navbar'>
          <div id='navbar-component-class' key='compoent-action'</div>
        </div>
      </form>
    </div>
  )
})
nodeMaster.createClass({
  insertToServer(id){
    return {
      id: id
    }
  },
  render(){
    var action=create({
      takeAction({
        this.props.component, this.props.function
      })
    })
    action.call(this.insertPost, function(){
      return (
        {this.props.id},
        {this.props.action}
        <form onSubmit={this.insertToServer(nodeMaster.toString())}>
          <master property={this.props.property}></master>
        </form>
      )
    })
  }
})
