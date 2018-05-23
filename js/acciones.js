// JavaScript Document
$(document).ready(function(e) {//escuchador de eventos
    document.addEventListener("deviceready",function(){ //deslizar a la isquierda
		$('#Izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo hacia la Izquierda",function(){"Aplicacion7", "Ok"}); //aparece mensaje alert
		}); //cierre swipe isquierda
		$('#Derecha').on("swiperight",function() { //deslizar Derecha
			navigator.notification.confirm("¿Que quieres hacer?",function(op){ //aparece ,mensaje para confirmar
				switch(op) //variable op para las opcciones 
				{
					case 1:
					navigator.notification.beep(1); //suena el dispocitivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000); //vibra el dispocitivo
					break;
				}
			},"aplicacion7","Beepear,Vibrar,Cancelar");
			});
		},false);
}); 