Components=master.createClass({
  render(){
    return (
      <master type='post'>
        <insertPosts />
        {this.props.viewPosts()}
      </master>
    )
  }
})
master.render({<Components />}, {
  render(){
    return (
      <insertPosts />
    )
  }
})
master.render({<insertPosts />}, {
  render(){
    return (
      <div>
        <post />
      </div>
    )
  }
})
