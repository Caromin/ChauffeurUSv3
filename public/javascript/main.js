$(window).on("load", function() {
  $("li.nav-item.marginLeftRight").on("click", function() {
    $("li.nav-item.marginLeftRight").removeClass("btn-focused");
    $(this).addClass("btn-focused");
  });
});
