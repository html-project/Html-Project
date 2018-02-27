{this.props.header}
{this.convertToAccessor()}
{this.props.footer}
MainRouter.route('route, params', {
  actionTake(event){
    event.preventDefault()
    event.setup({
      header: {this.props.header}
      content: {this.props.content}
      footer: {this.props.footer}
    })
  }
})
