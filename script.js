
let divE = document.getElementById('div-e');
let falt1 = document.getElementById('falt-1');
let falt2 = document.getElementById('falt-2');
let submitb = document.getElementById('btn-1');

let op1 = document.getElementById('plus-o');
let op2 = document.getElementById('minus-o');
let op3 = document.getElementById('divide-o');
let op4 = document.getElementById('times-o');

submitb.addEventListener('click', function() {
  var f1 = Number(falt1.value);
  var f2 = Number(falt2.value);

  let ope = '+';

  switch (ope) {
    case '+':
      res = f1 + f2;
        break;
    case  '-':
      res = f1 - f2;
        break;
    case  '/':
      res = f1/f2;
        break;
    case  '*':
      res = f1*f2;
        break;
    default:
      alert('Välj räknesätt!');
        break;
    }

  divE.insertAdjacentHTML('beforeend', '<p> Resulat: ' + res + '</p>');  
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
