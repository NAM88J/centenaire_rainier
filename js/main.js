$(window).scroll(function () {

});

$(document).ready(function () {

    $(document).on('click', '.events_menu li', function(e) {
        let all_items = $('.events_menu li, .events_items-area'),
            tab_id = $(this).data('tabid'),
            images = $('.events_opacitybg'),
            target_image = $('.events_opacitybg[data-tabid="' + tab_id + '"]')
            target_tab = $('.events_items-area[data-tabid="' + tab_id + '"]');
        all_items.removeClass('active');
        images.removeClass('active');
        $(this).addClass('active');
        target_tab.addClass('active');
        target_image.addClass('active');
    }); 
    // Open modal
    $(document).on('click', '.events_item-info', function(e) {
        e.preventDefault();
        let target_block = $(this).parents('.events_item'),
            target_modal = $('.events_modal'),
            modal_bg = $('.events_modal-bg'),
            modal_background = target_block.data('background'),
            modal_title = target_block.find('.events_item-title').html(),
            modal_data = target_block.find('.events_item-plase').html(),
            modal_description = target_block.find('.events_item-info').data('content'),
            modal_link_title = target_block.find('.events_item-plase').html(),
            modal_link_url = target_block.find('.events_item-plase').attr('href'),
            modal_link_target = target_block.find('.events_item-plase').attr('target');
        console.log(modal_background);
        modal_bg.addClass('active');
        target_modal .find('.events_item-data').html(modal_data);
        target_modal.find('.events_item-title').html(modal_title);
        target_modal.find('.events_modal-content').html(modal_description);
        target_modal.find('.events_modal-fon.image').css("background-image", "url('" + modal_background + "')");
        if (modal_link_title.length > 0 ) {
            target_modal.find('.events_modal-link').html(modal_link_title).addClass('active');
            target_modal.find('.events_modal-link').attr('href', modal_link_url);
            target_modal.find('.events_modal-link').attr('target', modal_link_target);
        } else {
            target_modal.find('.events_modal-link').removeClass('active');
        }
        setTimeout(function() { 
            target_modal.fadeIn(100);
        }, 100);
    });

    // Close modal
    $(document).on('click', '.events_modal-bg, .events_modal-close', function(e){
        e.preventDefault();
        let modal_bg = $('.events_modal-bg'),
            target_modal = $('.events_modal');
        target_modal.fadeOut(100);
        setTimeout(function() { 
            modal_bg.removeClass('active');
        }, 200);
    });


    const mouseWheel = document.querySelector('.events_content');
    mouseWheel.addEventListener('wheel', function(e) {
        const race = 15; // How many pixels to scroll

        if (e.deltaY > 0) // Scroll right
            mouseWheel.scrollLeft += race;
        else // Scroll left
            mouseWheel.scrollLeft -= race;
            e.preventDefault();
    });
});