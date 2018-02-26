{this.props.header}
{this.convertToAccessor()}
{this.props.footer}
return(){
  <InsertPosts/>
}

MainRouter.route('route, params'{
  actionTake(event){
    event.preventDefault()
    event.setup({
        header: {this,props.header}
        content: {this.convertToAccessor()}
        footer: {this.props.footer}
    })
  }
})
