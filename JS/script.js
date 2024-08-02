$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.carousel-item');
    var itemCount = items.length;

    function showItem(index) {
        items.removeClass('active');
        items.eq(index).addClass('active');
        $('.carousel-inner').css('transform', 'translateX(' + (-index * 100) + '%)');

        // Update captions
        var captionId = items.eq(index).data('caption-id');
        $('.carousel-caption').removeClass('active');
        $('#' + captionId).addClass('active');

        // Reset and restart animation
        $('.carousel-caption').css('animation', 'none');
        setTimeout(function() {
            $('.carousel-caption').css('animation', 'slideInFromLeft 1s ease-out forwards');
        }, 10); // Small delay to allow resetting animation
    }

    $('.carousel-control-next').click(function () {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    });

    $('.carousel-control-prev').click(function () {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    });

    setInterval(function () {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }, 5000);

    // Show the first item initially
    showItem(currentIndex);
});
