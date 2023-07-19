const button = document.getElementById("mybutton");
const count = document.getElementById("counter");

let counter = 0;

button.addEventListener('mousedown', function (){
    
    button.style.scale = 0.9;
    //button.style.fontSize = '170px';
    button.style.backgroundColor = 'red';
});
button.addEventListener('mouseup', function () {
    counter++;
    count.textContent = counter;
    button.style.scale = 1;
    //button.style.fontSize = '200px';
    button.style.backgroundColor = 'aqua';
    let randnum = Math.floor(Math.random()*10);
    console.log(randnum);
    if (randnum == 5){
        button.textContent = "KILL YOURSELF :3";
    } else {
        button.textContent = "Click Me";
    }
});


