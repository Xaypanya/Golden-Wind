var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = 'ຢຸດ <i class="fa fa-pause" aria-hidden="true"></i>';
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = 'ຫຼີ້ນຕໍ່ <i class="fa fa-play" aria-hidden="true"></i>';
	}

}

function stop(){
	playPause()
    audio.pause();
    count=0;
	audio.currentTime = 0;
	playPauseBTN.innerHTML = 'ຫຼີ້ນ <i class="fa fa-play" aria-hidden="true"></i>';
}

