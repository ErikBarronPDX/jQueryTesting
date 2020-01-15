$(document).ready(function() {
  $("#show").click(function(){
    $(".notShown").toggle();
  })

  $("#darkMode").click(function() { 
    $("body").toggleClass("darkMode");
  });
})