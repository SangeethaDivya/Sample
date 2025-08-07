var i = 0;
var userName = 'Sangeetha Divya!';
var speed = 200;

function typeWriter() {
  if (i < userName.length) {
    document.getElementById("name").innerHTML += userName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{
    document.getElementById("name").innerHTML = '';
     i= 0;
     setTimeout(typeWriter, speed);
  }
}
typeWriter()