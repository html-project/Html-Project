module.register({
  event: [event],
  getDate: function(){
    if (!$('#date').val() ){
      return $('#post-date').val()
    }else{
      return $('#date').val()
    }
  }
})
module.return({{
  $('#post-body').set('application', new WebApplicationComponent(), undefined)
}})
