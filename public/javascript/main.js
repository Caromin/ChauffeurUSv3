$(window).on("load", function() {
  $("a.navtitle.navbar-brand.marginLeftRight").on("click", function() {
    $("li.nav-item.marginLeftRight").removeClass("btn-focused");
  });
  $("li.nav-item.marginLeftRight").on("click", function() {
    $("li.nav-item.marginLeftRight").removeClass("btn-focused");
    $(this).addClass("btn-focused");
  });
});
