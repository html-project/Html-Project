if (module.export('preventDefault', function(){ event.preventDefault({ mixins: new WebApplicationComponent()}) ) {
      event.set(module.components, {
        mixin: event.get(),
        get: function(){
          var contents=event.setMixin({
            button: {this.props.button},
            header: {this.props.header},
            content: {this.props.content},
            footer: {this.props.footer}
          }, $("post-body").val(), undefined)
          return contents
        },
        getMixins: function(){
          module.export('header', {this.props.header})
          module.export('content', {this.props.content})
          module.export('footer', {this.props.footer})
          module.add(this.header => this.props.header, this.content => this.props.content, this.footer => this.props.footer)
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
