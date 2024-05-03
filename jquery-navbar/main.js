$(document).ready(function() {

  // Insert 'fa-angle-down' icon to LI's which have children UL.submenu
  $("#main-navbar li").each(function(idx, li) {
    if($(li).children().length > 1) {
      $(li).children().eq(0).append("<i class='fa fa-angle-down'></i>");
      $(li).addClass("has-dropdown"); // helpful for selecting the li's having dropdown
    }
  });


  // ========= Responsiveness =========
  // Mobile Devices - Click Behaviour
  // Desktop Devices - Hover Behaviour
  if($(window).width() < 1024) {

    // On Mobile device toggle dropdown on click + extra req.
    $("#menu-toggler").on("click", function() {
      $(this).toggleClass("active");
      if($(this).hasClass("active")) {
        $(".menu").addClass("active");
      } else {
        $(".menu").removeClass("active");
        $(".menu li").removeClass("active");
      }
    });

    $("#main-navbar li").each(function(idx, li) {
      $(li).on("click", function(event) {
        event.stopPropagation();

        // accordion style of showing submenus
        if($(this).parent().hasClass("menu")) {
          $(this).siblings().removeClass("active");
          $(this).siblings().find("li").removeClass("active");
        }

        if($(this).hasClass("has-dropdown")) {
          $(this).toggleClass("active");
        }
      });
    });

  } else {
    // On Desktop devices show dropdown on hover
    $("#main-navbar li.has-dropdown").each(function(idx, li) {
      $(li).on("mouseenter mouseleave", function() {
        $(this).toggleClass("active");
      });
    });
  }

});