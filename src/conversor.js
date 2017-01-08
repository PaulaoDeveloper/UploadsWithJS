function converter(data, callback){
	
	var reader = new window.FileReader();
 		reader.readAsDataURL(data);
 		reader.onloadend = function(){
 				callback(reader.result);
 		};
 		
}
