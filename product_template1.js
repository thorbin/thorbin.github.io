let slideindex1 = 1;

showslides1(slideindex1); /* insures that the starting image is image 1 */

function plusslides1(n) {
    
    showslides1(slideindex1 +=n ); /* iterates slide index by value a  from iniitial value 1 when function is called */

   /* HOW IT WORKS: when the slide toggle (prev & next) buttons on the main image are clicked, the function plusslides(n) is initialized with -1 for left
   and +1 for right. See function: plusslides(n) for further details */
}

function currentslide1(n) {

showslides1(slideindex1 = n);

 /* HOW IT WORKS: In the image sub-gallery, the function currentslide(n) is called with an arguement (n) with 'n' corresponding to 
 the slide number from left to right. this value is then passed onto the series of functions in the function currentslide(n). 
*/

}

function showslides1(n) {

    let i;
    let slides = document.getElementsByClassName("myslides1"); /* counts how many div elements share class "my slides" */
    let dots = document.getElementsByClassName("demo1"); /* counts how many div elements share class "demo" */
    if (n > slides.length) {
        slideindex1 = 1;  /* allows slide gallery to repeat after more forward clicks than pictures have occured */
     }
    if ( n < 1) {
        slideindex1 = slides.length; /* repeats gallery after more backward clicks than pictures occur */
    }

    for (i = 0; i < slides.length; i++) {  /* makes it so that the slide elements arent displayed all at once */

        slides[i].style.display="none";
       
    }

    for (i=0; i < dots.length; i++) { /* this is supposed to highlight the demo image active in the main display by making the active image more clear */

        dots[i].className = dots[i].className.replace(" active1", " demo1"); /* resets any active images back to demo to keep the main image active*/

    }

    slides[slideindex1-1].style.display="block"; /* displays active element in main display */
    dots[slideindex1-1].className += " active1"; /* takes current slide index calculated from values set in prev/next buttons and sets that class to active in sub gallery */
     
}
