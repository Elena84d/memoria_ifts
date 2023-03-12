var precedente=false;
prec=null;
succ=null;
var url;
function ready(){

let sezione=document.getElementById("s1");
for(let i=0;i<8;i++){
    let elemento=document.createElement("div");
    sezione.appendChild(elemento);
}


clip=["./immagini/auto.png","./immagini/aereo.png","./immagini/camion.png","./immagini/elicottero.png","./immagini/auto.png","./immagini/aereo.png","./immagini/camion.png","./immagini/elicottero.png"];
clip2=[...clip];
clip2.sort(() => Math.random() - 0.5);

var i=0;



let elementi=document.getElementById("s1");
ele=elementi.getElementsByTagName("div");

for(elementi of ele){
    elementi.id='d'+i;
    elementi.style.backgroundImage="url('./immagini/cover.png')"; 
    elementi.addEventListener("click",mostra);
    i++;
}
}

function mostra(d){
    pos=this.id;
    let punti=parseInt(document.getElementById("pun").textContent);
    punti++;
    document.getElementById("pun").textContent=punti;
    console.log(pos.length);
    let ind=pos.slice(1,pos.length)
    this.style.backgroundImage="url("+clip2[ind]+")";
    
    console.log(precedente)
    if(precedente==false){
        precedente=true;
        console.log("dop"+precedente)
        url="url("+clip2[ind]+")";
        prec=this;
        
    }
    else{
        precedente=false;
        succ=this;
        console.log(url+"--"+"url("+clip2[ind]+")"+precedente);
        if(url=="url("+clip2[ind]+")"){
       
            let intervalID = setTimeout(myCallback, 1000);
            function myCallback()
            {
            succ.style.display="none";
            prec.style.display="none";           
        }   
        
    }
    else{
        let intervalID = setTimeout(myCallback, 1000);
       function myCallback()
       {
          succ.style.backgroundImage="url('./immagini/cover.png')";
          prec.style.backgroundImage="url('./immagini/cover.png')";        
    }
}
}
}


document.addEventListener("DOMContentLoaded",ready);