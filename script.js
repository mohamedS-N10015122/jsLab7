 document.addEventListener('DOMContentLoaded', function() {
    const mouseEvent = document.getElementById('mouse event');
    const textEvent = document.getElementById('text event');
    const formEvent = document.getElementById('form event');
    const button1 = document.getElementById('Event1');
    const button2 = document.getElementById('Event2');
    const button3 = document.getElementById('Event3');
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
    button1.addEventListener('click', function() {
            alert('Hi, this is button 1');
        });
    button2.addEventListener('click', function() {
            alert('this is button 2');
        });
    button3.addEventListener('click', function() {
            alert('three    ');
        });
 })
 function unfocus() {
    console.log("Not in focus");
 }
