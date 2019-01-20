
//                          fooooooooooooooooorm
$(function () {
    var $sections = $('.form-section');
  
    function navigateTo(index) {
      // Mark the current section with the class 'current'
      $sections.removeClass('current').eq(index).addClass('current');
      // Show only the navigation buttons that make sense for the current section:
      $('.form-navigation .previous').toggle(index > 0);
      var atTheEnd = index >= $sections.length - 1;
      $('.form-navigation .next').toggle(!atTheEnd);
      $('.form-navigation [type=submit]').toggle(atTheEnd);
    }
  
    function curIndex() {
      // Return the current index by looking at which section has the class 'current'
      return $sections.index($sections.filter('.current'));
    }
  
    // Previous button is easy, just go back
    $('.form-navigation .previous').click(function() {
      navigateTo(curIndex() - 1);
    });
  
    // Next button goes forward iff current block validates
    $('.form-navigation .next').click(function() {
      if ($('.demo-form').parsley().validate({group: 'block-' + curIndex()}))
        navigateTo(curIndex() + 1);
    });
  
    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    $sections.each(function(index, section) {
      $(section).find(':input').attr('data-parsley-group', 'block-' + index);
    });
    navigateTo(0); // Start at the beginning
  });



  function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
      document.getElementById("workinput").disabled = false;
      document.getElementById("workinput").required = true;
    } 
    else if(document.getElementById('noCheck').checked) {
      document.getElementById("workinput").disabled = true;
   }
}

function Maharat() {
  if (document.getElementById('no').checked) {
    document.getElementById("study").disabled = true;
    document.getElementById("study").required = true;
  } 
  else {
    document.getElementById("study").disabled = false;
 }
}

//fooooooter fooooorm
function resetForm() {
  document.getElementById("footerForm").reset();
}

  // when the dom is ready
  jQuery(function($){
      // grab each slider (multiple supported)    
      $('.cover-slider').each(function(){
          // find the slides in this slider
             var $slides = $(this).find('.cover-slider__slide');
          // get the 0 based amount of slides
          var numSlides = $slides.length - 1;
          // incrementor
          var i = 0;
         
          // rotate slides
             var rotate = function(){
              // remove all sliding classes
              $slides.removeClass('active inactive');
              // add inactive to the current slide
              $slides.eq(i).addClass('inactive');
              // reset counter if last slide (so animates first one)
              if(i == numSlides){
                  i = -1;
              }
              // add active to incremented slide (next slide)
              $slides.eq(++i).addClass('active');
              // call this every few seconds
                 var timer = window.setTimeout(rotate, 5000);
             };
          // initialize the slider
             rotate();
      });
  });