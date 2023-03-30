$(document).ready(function(){

$(".field .icon").on("click", function() {
    $(".popup-box, .overlay").addClass("active");
  });

$(".overlay").on("click", function() {
     $(".popup-box, .overlay").removeClass("active");
  });


$(".image").on("click", function() {
  //Ruft die url aus dem Element ab
  var url = $(this).data("url");
  console.log(url);
   $(".inner").css("background-image", "url(" +  url  + ")");
  });

$(".image").on("click", function() {
  $(".popup-img, .overlay").addClass("active");
});

$(".overlay").on("click", function() {
    $(".popup-img, .overlay").removeClass("active");
  });

$(".details").on("click", function() {
    $("summary").toggle();
});

$(".search").on("click", function(){
  window.print();
});

})

function openWindow() {
  var myWindow = window.open("file:///f:/01_TRANSFER/Amer/Ausbildung/Aufgaben/Aufgabe Html-Page - Sivantos/window/popup.html",
   "_blank", "scrollbars=yes,resizable=yes,top=80,left=600,width=600,height=800");
}
