function desplegar(){
	var menuOculto = document.getElementById("menuOculto");
	var aMenu = Array.from(document.getElementsByClassName("mostrar"));

	menuOculto.addEventListener("click", function(e){
		e.preventDefault();
		aMenu.forEach(function(a) {
			a.classList.toggle("hiden");
		});
	});
}

desplegar();
