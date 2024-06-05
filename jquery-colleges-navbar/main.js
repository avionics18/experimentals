$(document).ready(function() {
  // Get All The Menus
  function getMenuData() {
    let menu_html = "";

    $.get("./menuData.json", function(data) {
      data.menus.forEach(menu => {
        const {title, url, icon, hasChildren, submenu} = menu;
        if(hasChildren) {
          let a = `<a href="${url}">${title} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down ml-8"><polyline points="6 9 12 15 18 9"></polyline></svg></a>`;
          let liSubMenus = "";
          submenu.forEach(s => {
            liSubMenus += `<li><a href="${s.url}">${s.title}</a></li>`;
          });
          let ulSubMenus = `<ul class="submenu">${liSubMenus}</ul>`;
          menu_html += `<li class="has-dropdown">${a}${ulSubMenus}</li>`;
        } else {
          menu_html += `<li><a href="${url}">${title}</a></li>`;
        }
      });

      $("#main-menu").append(menu_html);
    }, "json")
      .done(function() {
        activateMenu();
      })
      .fail(function() {
        alert("Error: Menu Couldn't be loaded!");
      });
  }
  getMenuData();


  function activateMenu() {
    // Navbar Logic
    $(".menu > li.has-dropdown > a").click(function(e) {
      e.preventDefault();
      // <a> logic
      $(".menu > li.has-dropdown > a").not($(this)).removeClass("active");
      $(this).toggleClass("active");
      // Dropdown Logic
      $(".submenu").not($(this).next()).slideUp("fast");
      $(this).next().slideToggle("fast");
    });

    // Click Outside Detection
    $(document).click(function(e) {
      let listItems = $(".menu li.has-dropdown");
      if(!($(e.target).closest(listItems).length)) {
        $(".submenu").slideUp("fast");
        $(".menu > li > a.active").removeClass("active");
      }
    });

    // Mobile Hamburger Menu Toggler
    $("#menu-toggler").click(function() {
      $(this).children(".feather-x").toggle();
      $(this).children(".feather-menu").toggle();
      $(".menu").slideToggle("fast");
    });
  }

  
});