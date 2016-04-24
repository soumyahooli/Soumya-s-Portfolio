$('.skillPage').click(function() {
    $('.skillContent').show();
    $('.homeContent').hide();
   $('.aboutContent').hide();
    $('.contactContent').hide();
    $(this).parent('li').addClass('active');
     $('.homePage').parent('li').removeClass('active');
    $('.aboutPage').parent('li').removeClass('active');
    $('.contactPage').parent('li').removeClass('active');
    
    $.ajax({
        type : "GET" ,
        url : "/json/work.json" ,
        dataType : "json",
        async : false ,
        success : function(data){
         $.each(data.work, function(index, value){
    var content= '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">'+value.start+' - '+value.end+'</h3></div><div class="panel-body"><table class="table table-responsive"> <tr><td class="td-left"><b>Company Worked for</b></td><td class="td-right">'+value.company+'</td></tr><tr><td><b>Designation</b></td><td>'+value.designation+'</td></tr><tr><td><b>Project</b></td><td class="panel-link">'+value.project+'</td></tr><tr><td></td><td class="pull-right"><button id="id'+value.id+' type="button" class="btn btn-primary" data-toggle="modal" data-target="#'+value.target+'">More</button></td></tr> </table>';
   $ (content).appendTo('.workContent');
	});
        
    },
        error :function(data){
        
    }
    });
$('.aboutMeWell').html('');
});
$('.skillPage').on('click', '#id1', function(){
    alert("in");
});

$('.homePage').click(function() {
   $('.homeContent').show();
    $('.skillContent').hide();
    $('.aboutContent').hide();
    $('.contactContent').hide();
     $(this).parent('li').addClass('active');
    $('.skillPage').parent('li').removeClass('active');
     $('.aboutPage').parent('li').removeClass('active');
     $('.contactPage').parent('li').removeClass('active');
     $('.workContent').html('');
    $('.aboutMeWell').html('');

});
$('.aboutPage').click(function() {
   $('.aboutContent').show();
    $('.homeContent').hide();
    $('.skillContent').hide();
    $('.contactContent').hide();
     $(this).parent('li').addClass('active');
    $('.skillPage').parent('li').removeClass('active');
     $('.homePage').parent('li').removeClass('active');
     $('.contactPage').parent('li').removeClass('active');
     $('.workContent').html('');
    $.ajax({
  type: "GET",
  url: "/json/aboutme.json",
  dataType: "json",
  async: false,
  success: function(data){
          $.each(data.aboutMe, function(index, value){
    var content= '<p>  <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'+value.point+ '</p>';
   $ (content).appendTo('.aboutMeWell');
	});
  },error: function(data){
        alert(JSON.stringify(data));
    }
});

});
$('.contactPage').click(function() {
   $('.contactContent').show();
    $('.homeContent').hide();
    $('.skillContent').hide();
    $('.aboutContent').hide();
     $(this).parent('li').addClass('active');
    $('.skillPage').parent('li').removeClass('active');
     $('.homePage').parent('li').removeClass('active');
     $('.aboutPage').parent('li').removeClass('active');
     $('.workContent').html('');
    $('.aboutMeWell').html('');
});


