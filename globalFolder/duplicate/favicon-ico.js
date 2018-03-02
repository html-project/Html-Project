module.register({
  event: [event],
  getDate: function(){
    if (!$('#date').val() ){
      return $('#post-date').val()
    }else{
      return $('#date').val()
    }
  },
  setDate: function(){
    this.eventDate=$('#post-date').val()
    if (this.eventDate){
      return this.eventDate
    }else{
      return [event]
    }
  }
})
module.return({{
  $('#post-body').set('application', new WebApplicationComponent(), undefined)
}})
