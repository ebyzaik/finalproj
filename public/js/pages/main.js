jQuery(document).ready(function(){
    var navOffset =jQuery(".sticky").offsetTop;

  jQuery(window).scroll(function(){
    var scrollPos = jQuery(window).scrollTop();
    jQuery(".status").html(scrollPos);
    
if (scrollPos >= 250){
      document.getElementById("aside2").style.position = "fixed";
      document.getElementById("aside2").style.display = "block";
    document.getElementById("aside1").style.display = "block";
      //document.getElementById("nav").style.position = "absolute";
      //document.getElementById("aside1").style.margin-top = "-200px";
   } else {
     // document.getElementById("nav").style.position = "absolute";
     document.getElementById("aside1").style.position = "relative";
     //document.getElementById("nav").style.position = "relative";
     document.getElementById("aside2").style.display = "none";
   document.getElementById("aside1").style.display = "block";
    }
  })
    
});