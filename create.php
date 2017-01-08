<?php  

	if(isset($_REQUEST['arq']) && isset($_REQUEST['nome']) && isset($_REQUEST['extensao'])){

			include 'config/config.php';

			switch ($_REQUEST['extensao']) {
				// VIDEO
				case 'video/mp4':
					$nameArq = $dir_videos.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.mp4';
					break;
				case 'video/mpg':
					$nameArq = $dir_videos.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.mpg';
					break;
				case 'video/avi':
					$nameArq = $dir_videos.substr($_REQUEST['nome'], 0, -5).'-'.mt_rand().'.wav';
					break;

				// AUDIO
				case 'audio/mp3':
					$nameArq = $dir_audios.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.mp3';
					break;
				case 'audio/ogg':
					$nameArq = $dir_audios.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.ogg';
					break;
				case 'audio/wav':
					$nameArq = $dir_audios.substr($_REQUEST['nome'], 0, -5).'-'.mt_rand().'.wav';
					break;

				// IMAGENS 
				case 'image/png':
					$nameArq = $dir_imagens.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.png';
					break;
				case 'image/jpg':
					$nameArq = $dir_imagens.substr($_REQUEST['nome'], 0, -4).'-'.mt_rand().'.jpg';
					break;
				case 'image/jpeg':
					$nameArq = $dir_imagens.substr($_REQUEST['nome'], 0, -5).'-'.mt_rand().'.jpeg';
					break;
				case 'image/gif':
					$nameArq = $dir_imagens.substr($_REQUEST['nome'], 0, -5).'-'.mt_rand().'.gif';
					break;
				
				default:
					# code...
					break;
			}

			$img = $_REQUEST['arq'];
			$img = str_replace('data:'.$_REQUEST['extensao'].';base64,', '', $img);
			$img = str_replace(' ', '+', $img);
			$data = base64_decode($img);
			$success = file_put_contents($nameArq, $data);
			print $success ? json_encode(array('msg' => 'sucesso', 'src' => $nameArq)) : json_encode(array('msg' => 'erro'));

	}

?>