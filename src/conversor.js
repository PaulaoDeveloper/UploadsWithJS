function converter(data, callback){
	
	var reader = new window.FileReader();
 		reader.readAsDataURL(data[0]);
 		reader.onloadend = function(){
 				callback(reader.result,{nome: data[1],type: data[2]});
 		};
 		
}
function salvar(data, callback){

				var [nome, ext, uri, save] = data;

				var http = new XMLHttpRequest(),
					url  = 'create.php',
					param = 'nome='+nome+'&extensao='+ext+'&arq='+uri+'&save='+save;

				http.open("POST", url, true);
				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");

				http.onreadystatechange = function() {
					if(http.readyState == 4 && http.status == 200) {
						callback(http.responseText);
					}
				}

				http.send(param);

}