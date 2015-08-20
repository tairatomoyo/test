$.ajax({
  type: 'GET',
  url: 'members_way.json',
  cache: false,
  dataType: 'json',
  success: function(json){
    var count = json.length;
    for(var i=0; i < count; i++){
      var memHtml = '';
      memHtml += '<div class="action">';
      memHtml += '<h3>'+json[i].titles+'</h3>';
      memHtml += '<p>'+json[i].descriptions+'</p>';
      memHtml += '</div>';
      $("#agenda_list").append(memHtml);
    }
  }
});

var actionHeight = 0;
$(function(){
  changeHeight();
});
$(window).resize(function(){
  $('.action').css('height','auto');
  changeHeight();
});
function changeHeight(){
  var winWidth = $(window).width();
  var num = 0;
  if(winWidth >= 640){
    num = 3;
  }else{
    num = 2;
  }
  var actionCount = $('.action').length;
  $('.action').each(function(i,e){
    $(this).addClass("aHeight");
    if(actionHeight < $(this).height()){
      actionHeight = $(this).height();
    }
    if(i%num == num-1 || i == actionCount-1){
      $('.aHeight').height(actionHeight);
      agendaHeight();
      actionHeight = 0;
      $('.action').removeClass("aHeight");
    }
  });
}

function agendaHeight(){
  var agendaList = $('#agenda_list').height()-8;
  $('#agenda_button').height(agendaList);
}