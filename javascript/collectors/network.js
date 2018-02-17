var classes={
  props: {}
  getFunction: function(collectorFunctions){
    this.props.classes=[0]
    this.collectorFunction=collectorFunctions
    var functions=this.collectorFunctions
  }
  setPosts: function(objects){
    this.props.collector={
      getClassPosts: function(){
        return {
          resetClasses: function(classes){
            this.props.classes=[0]
          }
        }
      }
    }
  }
}
classes.getFunction({
  return (
    class function{
      constructor(){
        this.posts=classes.setPosts([1])+" posts send to submit form"
      }
    }
  )
})
