function loadHeader() {
    document.getElementById('header').className = 'header';
    document.getElementById('header').innerHTML = `
    <div>
  <img src="./imgs/logo.png" alt="error" width="60px"
    height="60px">
    </div>
    <div>
    <a href="./pages/desprenoi.html" class="">Despre noi</a>
    <a href="#" class="">Galerie</a>
    <a href="#" class="">Produse</a>
    
    </div>
    <div>
    <a href="#" class="">Contacte</a>
    </div>
    `
}

function loadElements() {
    loadHeader();
}

window.onload = loadElements;



function nume(gtr){
 console. log ('HELLO',nume)
}

