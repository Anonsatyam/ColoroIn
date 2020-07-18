document.addEventListener("DOMContentLoaded", function (event) {
    //do work

    //Gradient Color Code Starts From here
    $('.solid_color_body').click(function () {
        var input = $("<input>");
        var color = $(this).children(".color-hex").text();
        $('body').append(input);
        input.val(color).select();
        document.execCommand('copy');
        input.remove();
        $('.copied').fadeIn().delay(2000).fadeOut();
    });

    const solid_divs = document.querySelectorAll('.solid_color_body');
    const solid_spans = document.querySelectorAll('.color_code');

    const solidColors = [
        '#E44236',
        '#B83227',
        '#D63031',
        '#E84342',
        '#E84342',
        '#FF3031',
        '#BA2F16',
        '#EC4849',
        '#E8290B',
        '#AE1438',
        '#E83350',
        '#FF4848'
    ];

    for (let i = 0; i < solidColors.length; i++) {
        solid_divs[i].style.background = solidColors[i];
        solid_spans[i].innerHTML = solidColors[i];
    };
    //Gradient Color Code Ends here
});