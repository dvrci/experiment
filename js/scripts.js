console.log('Hey there! Wellcome to my Portfolio Site!')
var text2 = null;
var text3 = 'Single quotes are valid too.';

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
