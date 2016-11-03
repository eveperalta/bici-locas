function validateForm(){
	/* Escribe tú código aquí */
	var arr = document.getElementsByTagName("input")

	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i])
		switch(arr[i].getAttribute("id")) {
			case "name":
				if(arr[i].value.replace(" ", "").length > 0) {
					var reg = /^[A-Z]/
					if(!reg.test(arr[i].value)) {
						alert("Caracter no Válido en el campo 'Nombre' ");
					}
				}
				break;
			case "lastname":
				if(arr[i].value.replace(" ", "").length > 0) {
					var reg = /^[A-Z]/
					if(!reg.test(arr[i].value)) {
						alert("Caracter no Válido en el campo 'Apellido' ");
					}
				}
				
				break;
			case "input-email":
				function validateEmail(email) {
				    var re = /\S+@\S+\.\S+/;
				    if(!re.test(email).value) {
				    	alert("Verifica el email");
				    }
				}
				break;
			case "input-password":
				var password = getElementById("input-password");
				function compare(password){
					if(password.value.length <=6){
						return ("ok");
					}else{
						return ("ur pwd is too long");
					}
				};
				
					break;
			default:

		}
	}
}
