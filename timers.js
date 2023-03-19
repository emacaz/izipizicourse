// Set the date we're counting down to
var accelerator = new Date("Jul 3, 2023 09:59:59").getTime();

var promo = new Date("Mar 24, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = accelerator - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // PROMO CALCULATIONS

    // Find the distance between now and the count down date
    var distance2 = promo - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="countdown"
    document.getElementById("acelerador_countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Output the result in an element with id="countdown"
    document.getElementById("course_countdown1").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";

    // Output the result in an element with id="countdown2"
    document.getElementById("course_countdown2").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
  
    // Output the result in an element with id="countdown3"
    document.getElementById("course_countdown3").innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("acelerador_countdown").innerHTML = "Oferta expirada";
        document.getElementById("course_countdown1").innerHTML = "Oferta expirada";
        document.getElementById("course_countdown2").innerHTML = "Oferta expirada";
        document.getElementById("course_countdown3").innerHTML = "Oferta expirada";
    }
}, 1000);