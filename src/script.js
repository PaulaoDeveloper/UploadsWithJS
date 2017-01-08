			$('#arquivos').change(function(e){
				var arq_img = [];
				arq_img.push(e.files());
				for(var i = 0; i < arq_img[0].length; i++){

					new converter(event.files()[i], function(url){
						var img = new Image(); 
						img.style.width = '100%'; 
						img.style.height = '100%';
						img.src = url;
						var ancora = document.createElement('a');
                		ancora.href = url;
                		ancora.target = '__blank';
                		ancora.appendChild(img);
                		$('.image .scroll').append(ancora);
					});

				}
			});

			$('#musicas').change(function(event){
				var arq_musicas = [];
				arq_musicas.push(event.files());
				for(var i = 0; i < arq_musicas[0].length; i++){

                new converter(event.files()[i], function(url){
                			var a = document.createElement('a');
                			var audio = new Audio();
							audio.controls = 'controls';
							var sour = document.createElement('source');
							sour.src = url;
							//sour.type = "audio/mpeg";
							audio.append(sour);
							a.href = url;
							a.append(audio);
							$('.audio .scroll').append(a);
                });

				}
			});