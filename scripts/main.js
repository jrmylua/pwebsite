$(function(){

  /* Toggles Show Covers List */
  $("#content").on('click', function(){
    $('.covers-list').slideToggle();
    if($(this).text() === 'Show List of Covers'){
      $(this).html('<h3>Hide List of Covers<h3>');
    }
    else{
      $(this).html('<h3>Show List of Covers<h3>');
    }
  });

  /* Toggles Show and Hide Lyrics Button */
  $(".lyric").on('click', function(){
    var lyricID = $(this).attr('data-id');
    $("#" + lyricID).slideToggle();
    if($(this).text() === 'Show Lyrics'){
      $(this).html('Hide Lyrics');
    }
    else{
      $(this).html('Show Lyrics');
    }
  });

  /* Controls jumping around on the page */
  $(".jumper").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

  });

});
