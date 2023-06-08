let slideindex = 1;

showslides(slideindex); /* insures that the starting image is image 1 */

function plusslides(n) {
    
    showslides(slideindex +=n ); /* iterates slide index by value a  from iniitial value 1 when function is called */

   /* HOW IT WORKS: when the slide toggle (prev & next) buttons on the main image are clicked, the function plusslides(n) is initialized with -1 for left
   and +1 for right. See function: plusslides(n) for further details */
}

function currentslide(n) {

showslides(slideindex = n);

 /* HOW IT WORKS: In the image sub-gallery, the function currentslide(n) is called with an arguement (n) with 'n' corresponding to 
 the slide number from left to right. this value is then passed onto the series of functions in the function currentslide(n). 
*/

}

function showslides(n) {

    let i;
    let slides = document.getElementsByClassName("myslides"); /* counts how many div elements share class "my slides" */
    let dots = document.getElementsByClassName("demo"); /* counts how many div elements share class "demo" */
    if (n > slides.length) {
        slideindex = 1;  /* allows slide gallery to repeat after more forward clicks than pictures have occured */
     }
    if ( n < 1) {
        slideindex = slides.length; /* repeats gallery after more backward clicks than pictures occur */
    }

    for (i = 0; i < slides.length; i++) {  /* makes it so that the slide elements arent displayed all at once */

        slides[i].style.display="none";
       
    }

    for (i=0; i < dots.length; i++) { /* this is supposed to highlight the demo image active in the main display by making the active image more clear */

        dots[i].className = dots[i].className.replace(" active", " demo"); /* resets any active images back to demo to keep the main image active*/

    }

    slides[slideindex-1].style.display="block"; /* displays active element in main display */
    dots[slideindex-1].className += " active"; /* takes current slide index calculated from values set in prev/next buttons and sets that class to active in sub gallery */
     
}

/* shopping cart and price stuff */

function return_price() {


document.getElementById("p8").innerHTML="TEST";


}

/*const a=0;  /* a is racks */
/*const a1=0;  /* a1 is rear racks, theoretically a1a would be a sub product in the rear racks category*/
/*const a2=0;
const a3=0;
const b=0;
const b1=0;
const b2=0;
const c=0;
var c1=0;
var c2=0;
var d=0;
var d1=0;
    var d1a=25;
    var d1b=0;
    var d1c=0;
var d2=0;
var d3=0
var e=0;*/