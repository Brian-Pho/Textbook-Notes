/**
 * Expand or close the sidebar in mobile screens.
 */
$(function() {

  let isExpanded = false;

  $("#sidebar-trigger").click(() => {
    if (!isExpanded) {
      $("#sidebar").addClass("sidebar-expand");
      isExpanded = true;
    }
  });

  $("#mask").click(() => {
    if (isExpanded) {
      $("#sidebar").removeClass("sidebar-expand");
      isExpanded = false;
      }
  });
});
