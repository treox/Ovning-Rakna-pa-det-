
let falt1 = document.getElementById('falt-1');
let falt2 = document.getElementById('falt-2');
let submitb = document.getElementById('btn-1');

let op1 = document.getElementById('plus-o');
let op2 = document.getElementById('minus-o');
let op3 = document.getElementById('times-o');
let op4 = document.getElementById('divide-o');

console.log(op1);

submitb.addEventListener('click', function() {
    var f1 = Number(falt1.value);
    var f2 = Number(falt2.value);

    console.log(f1 + f2);
    console.log(typeof(f1), typeof(f2));
});

op1.addEventListener('click' , function(){ 
    let op11 = op1.value;
    console.log(op11);
});

/*
switch (operator) {
    case op1 :
        break;
    case op1 :
        break;
    case op1 :
        break;
    case op1 :
        break;
    default:
        break;
}
*/

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
