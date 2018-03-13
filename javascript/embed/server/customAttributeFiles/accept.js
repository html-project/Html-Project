nodeMaster.createClass({
  render()(
    return (
      {this.props.content}
    )
  ),
  insert(id)(
    nodeMaster.insert({id: id}, function(){
      // Code written in Java but it is not working
      nodeMaster.return({
        setClass: function(){
          nodeMaster.add('application-master-component', new NodeMaster(), undefined)
        }
      })
    })
    return {
      id: id
    }
  )
})
