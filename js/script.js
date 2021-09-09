var tecla = document.querySelectorAll('.tc');
var barulho = document.getElementById('barulho');
var nota = document.getElementById('nota')

tecla.forEach((t) =>{    
    
    t.addEventListener('click',()=>{
        // t.style.backgroundColor = 'gray';
        console.log('Você clicou na tecla '+ t.id)
        barulho.src="sons/" + t.id+ ".mp3";
        barulho.play();
        nota.value = t.id;
        
    });
   
});