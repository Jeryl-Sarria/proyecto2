const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    

    alert("That's good, me too! although you could choose any option");
   

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

// var parrafo = document.createElement("p");
//var conten = document.createTextNode("Lo Sabía! ¡Sabía que confiabas en mi!");
//parrafo.appendChild(conten);
//document.getElementById('tex').appendChild(parrafo);