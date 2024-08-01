$(document).ready(function () {
    var currentIndex = 0;
    var items = $('.carousel-item');
    var itemCount = items.length;

    function showItem(index) {
        items.removeClass('active');
        items.eq(index).addClass('active');
        $('.carousel-inner').css('transform', 'translateX(' + (-index * 100) + '%)');
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
});
