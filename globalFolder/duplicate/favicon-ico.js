module.register({
  event: [event],
  getDate: function(){
    return $('#post-date').val()
  }
})
module.return({{
  $('#post-body').set('application', new WebApplicationComponent(), undefined)
}})
