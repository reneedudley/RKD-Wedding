$(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#arrow').pushpin({ top: $('#arrow').offset().top });
    var divs = $('#arrow');
    var header = $('#arrow');
    $(window).scroll(function() {
     header.addClass('lower-opacity');
     if($(this).scrollTop() === 0) {
        header.removeClass('lower-opacity');
     }
    });
    var options = [
    {selector: '#staggered-test', offset: 300, callback: 'Materialize.showStaggeredList("#staggered-test")'  },
    {selector: '#staggered-test2', offset: 350, callback: 'Materialize.showStaggeredList("#staggered-test2")'  }
    ];
    Materialize.scrollFire(options);

$('.slider').slider();
$('form').submit(function () {
    if ($('input').val() === "#austinandbecca") {
       $("#rsvp").append('<iframe src="https://docs.google.com/forms/d/1TTF0UEb9Z8BoIEvTXlEuGDf4so8jWJtvJIrsWzygSeE/viewform?embedded=true" width="500" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>')
    };
    $('input').val('');
    return false;
});

}); // end of document ready// end of jQuery name space



