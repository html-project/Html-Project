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
  render(idComp, textarea){
    if (nodeMaster.getElementById('myTextarea') != undefined){
      nodeMaster.setFunction(idComp, function(){
        var id=$('myTextarea').val()
        return {
          id: id,
          contentArray: {
            content: props.content
          },
          content: contentArray.content
        }
      }, textarea)
    }
    return (
      <master onSubmit={
        this.insert(this.props.content)} name={nodeMaster.getFunction()}
      >
    )
    textarea()
  }
})
nodeMaster.getClass().render(nodeMaster.component, function(){
  return (
    <master onSubmit={this.insert({
      render(){
        return takeAction(
          this.props.content, this.insert(this.props.component)
        )
      }
    })}, name={this.props.content}>
  )
})
