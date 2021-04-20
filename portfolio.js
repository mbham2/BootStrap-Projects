/*var soundClick = document.getElementsByClassName("headphones");
var audioSound = document.getElementByid("sound");
soundClick.addEventListener("click", 
function Play(){
  if(audioSound.paused){
    audioSound.play();
  }
  else {
    audioSound.pause();
  }
});*/


$(function()
    {
        $("#loginButton").click(function() {
            $("#loginModal").modal('show');
             });
     });

     /*$(function()
     {
         $("#tablaButton").click(function() {
             $("#tablaModal").modal('show');
              });
             
     });

     /*$(function()
     {
       let arr = ['#carnatic','#veena','#violin'];
       arrLen = arr.length;
       for(let i=0; i <= arrLen-1; i=i+1)
       {
         arrNew = arr[i];
         
         arrButton = arrNew+"Button";
         arrModal = arrNew+"Modal";
         arrButStr="\""+ arrButton+"\"";
         arrModStr="\""+ arrModal+"\"";
         console.log(arrButStr,arrModStr);
               
         $(arrButStr).click(function() {
         $(arrModStr).modal('show');
          });
          }
     });*/










