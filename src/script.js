			$('#arquivos').change(function(e){
				var arqs = [];
				arqs.push(e.files());
				for(var i = 0; i < arqs[0].length; i++){
					new converter([arqs[0][i], arqs[0][i].name, arqs[0][i].type], 
						function(url, configs){	
           			salvar([configs.name, configs.type, url], 
           				function(r){
           					console.log(r);
           					var m = JSON.parse(r);
           					if(m.msg == 'sucesso'){
           						var img = new Image(); 
								      img.style.width = '100%'; 
								      img.style.height = '100%';
								      img.src = m.src;
								      var ancora = document.createElement('a');
                			ancora.href = m.src;
                			ancora.target = '__blank';
                			ancora.appendChild(img);
                			$('.image .scroll').append(ancora);
           					}else{
           						console.log('Erro');
           					}
            	});
					});
				}
		});

$('#musicas').change(function(event){
  var arq_musicas = [];
	arq_musicas.push(event.files());

	for(var i = 0; i < arq_musicas[0].length; i++){

     new converter([arq_musicas[0][i],arq_musicas[0][i].name,arq_musicas[0][i].type], 
          function(url, config){
             salvar([config.nome, config.type, url], 
               function(retorno){
                	var mss = JSON.parse(retorno);
                	if(mss.msg != 'erro'){
                	var a = document.createElement('a');
                	var audio = new Audio();
									audio.controls = 'controls';
									var sour = document.createElement('source');
									sour.src = mss.src;
									audio.append(sour);
									a.href = mss.src;
									a.append(audio);
									$('.audio .scroll').append(a);
                }
            });
        });
    }
});

$("#videos").change(function(ob){

    var videos = [];
    videos.push(ob.files());

    for(var i = 0; i < videos[0].length; i++){

      new converter([videos[0][i], videos[0][i].name, videos[0][i].type],
        function(url, config){

          var a = document.createElement('a'),
              v = document.createElement('video');
              v.autoplay = true;
              v.controls = true;
              var source = document.createElement('source');
              source.src = url;
              source.type = config.type;
              a.target = '__blank';
              a.href = url;
              v.appendChild(source);
              a.appendChild(v);
              $('.video .scroll').append(a);

        });
    }
});