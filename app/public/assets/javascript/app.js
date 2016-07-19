$('#test').on('click', function(){
  var item = {
    id: 2,
    name: 'test',
    score: [],
  };
  $.post('http://localhost:8080/api/newdog', item).done(function(res){
    console.log(res)
  })
})
