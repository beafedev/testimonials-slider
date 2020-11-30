const slides = document.querySelectorAll('.user-slider');
// const tests = document.querySelectorAll('.user-testimonial');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');



// console.log(tests[0]);
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide');
        // tests[i].classList.add('hide');
    }
    slides[slideIndex-1].classList.remove("hide");
    // tests[slideIndex-1].classList.remove("hide");
  }

// nextBtn.addEventListener('click', function() {
//       plusSlides(1);
//       console.log('clicked next');
//     });
// prevBtn.addEventListener('click', function() {
//         plusSlides(-1);
//         console.log('clicked prev');
    //);
//  prevBtn.addEventListener('click', plusSlides(-1));

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            plusSlides(1);
        } else {
            /* right swipe */
            plusSlides(-1);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};