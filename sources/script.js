function init() {
    let scappa=document.getElementById("scappa");
    let resta=document.getElementById("resta");
    let risposta=document.getElementById("risposta");

    resta.addEventListener("click", function(){
        if (risposta.innerHTML===""){
            let imgRisposta=document.createElement("img");
            imgRisposta.src=`img/laughing.gif`;
            imgRisposta.alt="Eh sì!!"
            risposta.appendChild(imgRisposta);
        } else {
           risposta.innerHTML=""; 
        } 
    })

    //DESKTOP
    scappa.addEventListener("mouseenter", function(){
        if (!scappa.style.top) {
            scappa.style.top = scappa.offsetTop + 'px';
            scappa.style.left = scappa.offsetLeft + 'px';
            scappa.style.bottom = 'auto';
            scappa.style.right = 'auto';
        }

        const divW = scappa.parentElement.offsetWidth;
        const divH = scappa.parentElement.offsetHeight;
        const btnW = scappa.offsetWidth;
        const btnH = scappa.offsetHeight;

        const x = Math.random() * (divW - btnW);
        const y = Math.random() * (divH - btnH);

        scappa.style.left = x + 'px';
        scappa.style.top  = y + 'px';
    })

    //MOBILE
    scappa.addEventListener("touchstart", function(e){
        e.preventDefault();
        
        if (scappa.style.top === '') {
            scappa.style.top = scappa.offsetTop + 'px';
            scappa.style.left = scappa.offsetLeft + 'px';
            scappa.style.bottom = 'auto';
            scappa.style.right = 'auto';
        }

        const divW = scappa.parentElement.offsetWidth;
        const divH = scappa.parentElement.offsetHeight;
        const btnW = scappa.offsetWidth;
        const btnH = scappa.offsetHeight;

        const x = Math.random() * (divW - btnW);
        const y = Math.random() * (divH - btnH);

        scappa.style.left = x + 'px';
        scappa.style.top  = y + 'px';
    });

    scappa.addEventListener("click", function(){
        if (risposta.innerHTML===""){
            let imgRisposta=document.createElement("img");
            imgRisposta.src=`img/sideEye.gif`;
            imgRisposta.alt="ma va là!!"
            risposta.appendChild(imgRisposta);
        } else {
           risposta.innerHTML=""; 
        } 
    })
}