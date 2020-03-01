/**
 * Expand or close the sidebar in mobile screens.
 * v2.0
 * https://github.com/cotes2020/jekyll-theme-chirpy
 * © 2018-2019 Cotes Chung
 * MIT License
 */
$(function() {

  let isExpanded = false;

  $("#sidebar-trigger").click(function() {
    if (!isExpanded) {
      $("#sidebar").addClass("sidebar-expand");
      isExpanded = true;
    }
  });

  $("#mask").click(function() {
    if (isExpanded) {
      $("#sidebar").removeClass("sidebar-expand");
      isExpanded = false;
      }
  });
});
