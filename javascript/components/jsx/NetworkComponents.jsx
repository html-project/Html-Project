Components=React.getClass(){
  getProperty(contents){
    contents.setFooter(contents.footer)
    contents.setContents(contents.content)
    contents.setHeader(contents.header)
  }
  setComponents(){
    var classComponents=getProperty(
      return {
        header: <Header/>
        content: "This is a property"
        footer: <Footer/>
      }
    )
  }
}
