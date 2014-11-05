$(function(){
	/*$.ajax({
		type: "GET",
		url: "http://192.168.11.19:81/livestream/11?action=play&media=video_data",
		username: "admin",
		password: "admin",
		beforeSend: function(xhr) {
			//xhr.setRequestHeader("User-Agent", "HiIpcam/V100R003 VodClient/1.0.0");
			//xhr.setRequestHeader("Connection", "Keep-Alive");
			xhr.setRequestHeader("Cache-Control", "no-cache");
			xhr.setRequestHeader("Authorization", "guest guest");
			//xhr.setRequestHeader("Content-Length", "57");
			xhr.setRequestHeader("Cseq", "1");
			xhr.setRequestHeader("Transport","RTP/AVP/TCP;unicast;interleaved=0-1");
			xhr.setRequestHeader("Access-Control-Allow-Origin", "http://192.168.11.19");
		},
		success: function(response) {
			console.log("success");
			console.log(response);
		},
		fail: function(err) {
			console.log("error");
			console.log(err);
		}
	})*/
	 
	var login = $("#login_container");
	var video = $("#video_container");
	var image = $("#window")[0];
	var control = $("#direction_control")[0];
	var url; 
	var img_url;
	 
	$("#submit").click(function(){
		url = $("#address").val();
		img_url = url + "/tmpfs/auto.jpg";
		/*$.ajax({
			type: "GET",
			url: url,
			crossDomain: true,
			username: $("#username").val(),
			password: $("#password").val(),
			success: function() {
				console.log("log in success");
				container.fadeOut(function(){
					image.onload = onLoad;
					image.src = url;
					window.fadeIn();
					
				});
			},
			fail: function(e) {
				console.log("log in failed");
				console.log(e);
			}
		});	*/
		$("#url").text(url);
		login.fadeOut(function(){
			image.onload = onLoad;
			image.src = img_url;
			video.fadeIn();
		});
	});
	
	$("#pause").click(function(){
		$("#pause").hide();
		$("#play").show();
		image.onload=function(){};
	});
	
	$("#play").click(function(){
		$("#play").hide();
		$("#pause").show();
		image.onload=onLoad;
		image.src = img_url;
	});
	
	$(document).keydown(function(e){
		if(url) {
			if(e.keyCode == "37") { //left
				left();
			}
			else if(e.keyCode == "38") { //up
				up();
			}
			else if(e.keyCode == "39") { //right
				right();
			}
			else if(e.keyCode == "40") { //down
				down();
			}
			/*else if(e.keyCode == "43") { //plus
				zoomIn();
			}
			else if(e.keyCode == "45") { //minus
				zoomOut();
			}*/
		}
	});
	
	function onLoad() {
		image.src = img_url +"?"+ new Date().getTime();
	}
	
	function up() {
		control.action = url + "/cgi-bin/hi3510/ytup.cgi";
		control.submit();
	}
	
	function down() {
		control.action = url + "/cgi-bin/hi3510/ytdown.cgi";
		control.submit();
	}
	
	function left() {
		control.action = url + "/cgi-bin/hi3510/ytleft.cgi";
		control.submit();
	}
	
	function right() {
		control.action = url + "/cgi-bin/hi3510/ytright.cgi";
		control.submit();
	}
	
	function zoomIn() {
		control.action = url + "/cgi-bin/hi3510/ptzzoomin.cgi";
		control.submit();
	}
	
	function zoomOut() {
		control.action = url + "/cgi-bin/hi3510/ptzzoomout.cgi";
		control.submit();
	}
	
	/*function adaptiveLoop(callback) {
		//var start = new Date().getTime();
		//var end = new Date().getTime();
		//var time = end - start;
		callback();
		setTimeout(function(){
			adaptiveLoop(callback);
		}, //timeout-time);});
		timeout);}
	
	adaptiveLoop(function(){
		image.src = "http://192.168.1.126:81/tmpfs/auto.jpg#" + new Date().getTime();
	});*/
});