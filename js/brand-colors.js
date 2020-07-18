document.addEventListener("DOMContentLoaded", function (event) {
    //do work

    //Gradient Color Code Starts From here
    $('.brand_colors').click(function () {
        var input = $("<input>");
        var color = $(this).children(".color-hex").text();
        $('body').append(input);
        input.val(color).select();
        document.execCommand('copy');
        input.remove();
        $('.copied').fadeIn().delay(2000).fadeOut();
    });

    const brand_circles = document.querySelectorAll('.brand_colors');
    const brand_spans = document.querySelectorAll('.color_code');

    const brandsColors = [
        //Pepsi
        '#e32934',
        '#004883',
        //Github
        '#4078c0',
        '#6cc644',
        '#bd2c00',
        '#c9510c',
        '#6e5494',
        '#fafafa',
        '#f5f5f5',
        '#333333',
        //Paypal
        '#003087',
        '#009cde',
        '#012169'
    ];

    for (let i = 0; i < brandsColors.length; i++) {
        brand_circles[i].style.background = brandsColors[i];
        brand_spans[i].innerHTML = brandsColors[i];
    };
    //Gradient Color Code Ends here
});