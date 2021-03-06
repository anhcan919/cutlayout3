// Main
console.log('FullStack Vietnam!')

$('.home_slide .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
})
$('.home_trademark .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})