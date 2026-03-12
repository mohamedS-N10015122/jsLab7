 document.addEventListener('DOMContentLoaded', function() {
    const mouseEvent = document.getElementById('mouse event');
    const textEvent = document.getElementById('text event');
    const formEvent = document.getElementById('form event');
    mouseEvent.addEventListener('mouseenter', function() {
    console.log("mouse entered");
        });
    mouseEvent.addEventListener('mouseleave', function() {
            console.log("mouse left");
        });
        textEvent.addEventListener('keydown', function (event){
        console.log(`Key pressed: ${event.key}`);
        })
     formEvent.addEventListener('submit', function(event) {
                event.preventDefault();
                alert(`Submitted!`);
            });
 })
 function unfocus() {
    console.log("Not in focus");
 }
