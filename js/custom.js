// for video
new VenoBox({
  selector: '.my-video-links',
});

// trainer section slick slider

$('.trainer_main').slick({
  dots: true,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
     {
       breakpoint: 1130,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         dots: true
       }
     },
     {
       breakpoint: 1370,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 3,
         dots: true
       }
     },
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         dots: true
       }
     },
   
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});