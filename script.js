let popped=0;
const text="A Cutiepie named Krati was born 16 years ago 💖";
let i=0;
function typeText(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++;setTimeout(typeText,70);
 }}
typeText();

function startSurprise(){
 document.getElementById("bgMusic").volume=0.25;
 document.getElementById("bgMusic").play();
 confetti({particleCount:200,spread:90,origin:{y:0.6}});
 next(2);
}

function next(n){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 document.getElementById("screen"+n).classList.add("active");
}

function pop(el){
 el.style.visibility="hidden";popped++;
 if(popped===4){document.getElementById("nextBtn").disabled=false;}
}
