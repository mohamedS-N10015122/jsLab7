 document.addEventListener('DOMContentLoaded', function() {
    const mouseEvent = document.getElementById('mouse event');

    mouseEvent.addEventListener('mouseenter', function() {
    console.log("mouse entered");
        });
    mouseEvent.addEventListener('mouseleave', function() {
            console.log("mouse left");
        });
    
 })
