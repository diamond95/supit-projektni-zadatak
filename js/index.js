$(function() {
  animateText();
});



function animateText() {

  $('.tlt').textillate({
    minDisplayTime: 1000, 
    in: { effect: 'flipInX' }, 
    out :{  delay: 3, effect: 'lightSpeedOut'},
    loop: true
});
}