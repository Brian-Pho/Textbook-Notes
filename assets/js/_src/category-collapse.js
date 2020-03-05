/*
 * Tab 'Categories' expand/close effect.
 */
$(function() {
  var b = "l_";
  var a = "h_";
  $(".collapse").on("hide.bs.collapse", function() {
    var c = a + $(this).attr("id").substring(b.length);
    if (c) {
      $("#" + c + " .far.fa-folder-open").attr("class", "far fa-folder fa-fw");
      $("#" + c + " i.fas").addClass("rotate");
      $("#" + c).removeClass("hide-border-bottom")
    }
  });
  $(".collapse").on("show.bs.collapse", function() {
    var c = a + $(this).attr("id").substring(b.length);
    if (c) {
      $("#" + c + " .far.fa-folder").attr("class", "far fa-folder-open fa-fw");
      $("#" + c + " i.fas").removeClass("rotate");
      $("#" + c).addClass("hide-border-bottom")
    }
  })
});
