$(document).ready(function (){

  var nClick = $(".next");
  var pClick = $(".prev");

  // 1.1 Impostazione click previous img.
  // immagine e pallino scorrono verso sinistra quando si preme la freccia (fa-angle-left)
  pClick.click(
    function () {
      var imgActv = $("img.active");
      imgActv.removeClass("active");
      var saircol = $("i.active");
      saircol.removeClass("active");

      if (imgActv.hasClass("first") && saircol.hasClass("first")) {
        $("img.last").addClass("active");
        $("i.last").addClass("active");
      } else {
        imgActv.prev().addClass("active");
        saircol.prev().addClass("active");
      }
    }
  );

  // 1.2 Impostazione click next img.
  // immagine e pallino scorrono verso destra quando si preme la freccia (fa-angle-right)
  nClick.click(
    function () {
      var imgActv = $("img.active");
      imgActv.removeClass("active");
      var saircol = $("i.active");
      saircol.removeClass("active");

      if (imgActv.hasClass("last") && saircol.hasClass("last")) {
        $("img.first").addClass("active");
        $("i.first").addClass("active");
      } else {
        imgActv.next().addClass("active");
        saircol.next().addClass("active");
      }
    }
  );

  // 2.1 Impostazione keydown previous img
  // immagine e pallino scorrono verso sinistra quando si preme il tasto "freccia sinistra" sulla tastiera
  $(document).keydown(function(e){
    if (e.keyCode == 37) {
      pClick.click();
    }
  });

  // 2.2 Impostazione keydown previous img
  // immagine e pallino scorrono verso destra quando si preme il tasto "freccia destra" sulla tastiera
  $(document).keydown(function(e){
    if (e.keyCode == 39) {
      nClick.click();
    }
  });

});
