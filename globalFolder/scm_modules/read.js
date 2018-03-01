if (module.export('preventDefault', function(){ event.preventDefault({ mixins: undefined }) ) {
      event.set(module.components, {
        mixin: event.get(),
        getMixins: function(){
          if (!this.mixin){
            if (!this.props.content){
              this.mixin=new WebApplicationComponent(
                module.prevent({this.props.button}), module.prevent({this.props.header}). module.prevent({this.props.footer}),
                this.props.button, this.props.header, this.props.footer
              )
            }else{
              this.mixin=new WebApplicationComponent(
                module.prevent({this.props.button}), module.prevent({this.props.header}). module.prevent({this.props.footer}),
                this.props.button, this.props.header, this.props.content, this.props.footer
              )
            }
            module.export('header', {this.props.header})
            module.export('content', {this.props.content})
            module.export('footer', {this.props.footer})
            module.add(this.header => this.props.header, this.content => this.props.content, this.footer => this.props.footer)
          }
          return this.mixin
        },
        setMixins: function(mixin){
          this.mixin=mixin
          event.set(this.mixin)
        }
      })
    }
  } {
    module.export('return', (
      {this.props.header}
      {this.props.content}
      {this.props.footer}
    ))
  }
