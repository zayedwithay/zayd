let af = document.getElementById('af');
let t = document.getElementById('t');
let sh = document.getElementById('sh');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function () {

  let value = window.scrollY;
  sh.style.top = value * 1 + 'px';
  text.style.marginRight = value * 2 + 'px';
  btn.style.marginTop = value * 0.4 + 'px';

})