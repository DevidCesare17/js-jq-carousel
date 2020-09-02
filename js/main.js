$(document).ready(function (){

  var nClick = $(".next");
  var pClick = $(".prev");

  pClick.click(
    function () {
      var imgActv = $("img.active");
      imgActv.removeClass("active");
      if (imgActv.hasClass("first")) {
        $("img.last").addClass("active");
      } else {
        imgActv.prev().addClass("active");
      }

      var saircol = $("i.active");
      saircol.removeClass("active");
      if (saircol.hasClass("first")) {
        $("i.last").addClass("active");
      } else {
        saircol.prev().addClass("active");
      }
    }
  );

  nClick.click(
    function () {
      var imgActv = $("img.active");
      imgActv.removeClass("active");
      if (imgActv.hasClass("last")) {
        $("img.first").addClass("active");
      } else {
        imgActv.next().addClass("active");
      }

      var saircol = $("i.active");
      saircol.removeClass("active");
      if (saircol.hasClass("last")) {
        $("i.first").addClass("active");
      } else {
        saircol.next().addClass("active");
      }
    }
  );



  $("nav>i").click(
    function () {
      var clickSaircol = $("i.fa-circle");
      clickSaircol.addClass("active");
    }
  );
});
