var input0= document.getElementById("input1");
var invalidChars = [
  "-",
  "+",
  "e",
];

input0.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});



input0.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
event.preventDefault();
messico();
}
});

function messico(){
    var input1= document.getElementById("input1").value;
    
    var input2=document.getElementById("input2").value;
              
     var valore=document.getElementById("select1").value;
   
if(valore=="1"){
var calcolo=parseInt(input1)*parseInt(input2);
var calcolo2=calcolo/100;
var calcolo3=parseInt(input1)+calcolo2;
document.getElementById("rop").innerHTML=calcolo3;
document.getElementById("ri").innerHTML =calcolo2; 
 
}else{
var prezzo=Number(input1);
var iva=Number(input2);

    if(input2=='22'){
   var imp=prezzo/1.22;
   var ivar=prezzo-imp;
   
   document.getElementById("rop").innerHTML=Number(imp.toFixed(2));
   
document.getElementById("ri").innerHTML=Number(ivar.toFixed(2));       
}
if(input2=="10"){
   
    var imp=prezzo/1.10;
   var ivar=prezzo-imp;
   
   document.getElementById("rop").innerHTML=Number(imp.toFixed(2));
   
document.getElementById("ri").innerHTML=Number(ivar.toFixed(2)); 
   
}
if(input2=="5"){
  var imp=prezzo/1.05;
   var ivar=prezzo-imp;
   
   document.getElementById("rop").innerHTML=Number(imp.toFixed(2));
   
document.getElementById("ri").innerHTML=Number(ivar.toFixed(2)); 

}
if(input2=="4"){

var imp=prezzo/1.04;
   var ivar=prezzo-imp;
   
   document.getElementById("rop").innerHTML=Number(imp.toFixed(2));
   
document.getElementById("ri").innerHTML=Number(ivar.toFixed(2));    

}
   


     
 
}
 


 }

 
 
 

function chl(){

 var lang= document.getElementById("lang").value;

if(lang=="1"){


document.getElementById("ip").innerHTML="Enter price:"
document.getElementById("av").innerHTML="Add VAT"
document.getElementById("rv").innerHTML="Subtract VAT"
document.getElementById("ipv").innerHTML="Enter VAT percentage:"
document.getElementById("button").innerHTML="Calculate"
document.getElementById("ris").innerHTML="Result"
document.getElementById("prezzo").innerHTML="Price:"

} 
if(lang=="2"){
  
  document.getElementById("ip").innerHTML="Inserire prezzo:"
  document.getElementById("av").innerHTML="Addiziona iva"
  document.getElementById("rv").innerHTML="Sottrai iva"
  document.getElementById("ipv").innerHTML="Inserire percentuale iva:";
  document.getElementById("button").innerHTML="Calcola"
  document.getElementById("ris").innerHTML="Risultato"
  document.getElementById("prezzo").innerHTML="Prezzo:";
  document.getElementById("iva").innerHTML="IVA:"
  
}



 }

 if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
