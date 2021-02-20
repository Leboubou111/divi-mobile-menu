function setup_collapsible_submenus() {
    $('.et_mobile_nav_menu, a.mobile_nav, span.mobile_menu_bar')
    .off('click');
    $('ul.et_mobile_menu, .et_mobile_menu > li.menu-item.menu-item-has-children > ul.sub-menu') // Remove the first ">" for all sub menu
    .addClass('closed');

    $('.et_mobile_menu > li.menu-item.menu-item-has-children > a').each(function() {  // Remove the first ">" for all sub menu
        $(this).attr('href', '#').next('ul.sub-menu')
        .prepend('<li class="menu-item menu-item-type-custom menu-item-object-custom backlink-menu">' + $(this).text() + '</li>'); // You can change text with "$(this).text()"
    });

    $('.et_mobile_menu > li.menu-item.menu-item-has-children > a').off('click').click(function() {  // Remove the first ">" for all sub menu
        $(this).next('ul.sub-menu')
        .removeClass('closed')
        .addClass('opened');
    });

    $('.et_mobile_menu li.backlink-menu').click(function() {
        $(this).parent()
        .addClass('closed')
        .removeClass('opened');
    });

    $('span.mobile_menu_bar').click(function() {
        if ($(this).parent().hasClass('opened')) {
            $('a.mobile_nav.opened, ul.et_mobile_menu.opened, ul.sub-menu.opened')
            .removeClass('opened')
            .addClass('closed');
        } else {
            $('a.mobile_nav.closed, ul.et_mobile_menu.closed')
            .removeClass('closed')
            .addClass('opened');
        }
    });
}
$(window).load(function() {
    setTimeout(function() {
        setup_collapsible_submenus();
    }, 500);
});
