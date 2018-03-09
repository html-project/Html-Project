Components=React.getClass(){
  getProperty(contents){
    contents.setFooter(contents.footer)
    contents.setContents(contents.content)
    contents.setHeader(contents.header)
  }
  setComponents(){
    var classComponents=getProperty(
      setFooter(footer){
        this.props.footer=footer
      }
      setContents(content){
        this.props.content=content
      }
      setHeader(header){
        this.props.header=header
      }
      return {
        header: <Header/>
        content: "This is a property"
        footer: <Footer/>
      }
    )
  }
}
