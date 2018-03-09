'use strict';
{this.props.header}
{this.convertToAccessor()}
{this.props.footer}
MainRouter.route('route, params', {
  mixins: [Data],
  actionTake(event){
    event.preventDefault()
    event.setup({
      header: {this.props.header}
      content: {this.props.content}
      footer: {this.props.footer}
    })
  },
  actionFinished(event){
    event.finishAction({
      {this.props.header}
      {this.props.content}
      {this.props.footer}
    })
  }
})
