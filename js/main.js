// $('body').mousemove(function(e){
//     console.log(e.target);
// });


// function sticky_element () {
    
//         let target = $('.events_items'),
            
//             curent_position = $(window).scrollLeft(),
//             target_position = target.offset().left,
//             target_cansel = target.outerHeight() + target_position - cansel.outerHeight();
            
//         if (target_position < curent_position && target_cansel > curent_position) {
//             $('.company_faq-control ul').addClass('fix');
//         } else {
//             $('.company_faq-control ul').removeClass('fix');
//         }

//         $('.company_faq-item').each(function() {
//             let topper = $(this).offset().top,
//                 cur_men = $('.company_faq-control li[data-curent="' + $(this).data('target') + '"]');
//             if (topper - 50 <= curent_position ) {
//                 $('.company_faq-control li').removeClass('active');
//                 cur_men.addClass('active');
//             }
            
//         });

// }



$(window).scroll(function () {

});

$(document).ready(function () {
    // Open modal
    $(document).on('click', '.events_item-info', function(e) {
        e.preventDefault();
        let target_id = $(this).attr('href'),
            target_modal = $('.events_modal[data-id="' + target_id + '"]'),
            modal_bg = $('.events_modal-bg');
        modal_bg.addClass('active').attr('data-id', target_id);
        setTimeout(function() { 
            target_modal.fadeIn(100);
        }, 100);
    });

    // Close modal
    $(document).on('click', '.events_modal-bg, .events_modal-close', function(e){
        e.preventDefault();
        let modal_bg = $('.events_modal-bg'),
            target_id = modal_bg.attr('data-id'),
            target_modal = $('.events_modal[data-id="' + target_id + '"]');
        target_modal.fadeOut(100);
        setTimeout(function() { 
            modal_bg.removeClass('active').attr('data-id', '');
        }, 200);
    });





    // $('ul>li>a').bind('click',function(event){
    //     var $anchor = $(this);

    //     $('html, body').stop().animate({
    //         scrollLeft: $($anchor.attr('href')).offset().left
    //     }, 1000);
    //     event.preventDefault();
    // });
    
    // $(document).on('wheel', '.events_content', function(e){
    //     const race = 25;
    //     let oe = e.originalEvent;
    //     if (oe.deltaY > 0) {
    //         $('this').scrollLeft += race;
    //     } else {
    //         $('this').scrollLeft -= race;
    //     }
    // });
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