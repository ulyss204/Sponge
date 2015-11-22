
	document.getElementById("check").onclick = function(){
		this.style.backgroundImage = "url(sass/images/check1.png)"
		document.getElementById("bt1").disabled = false
		document.getElementById("invisible").style.display = "block"
	}
		
	document.getElementById("invisible").onclick = function(){	
		document.getElementById("check").style.backgroundImage = "none"
		document.getElementById("bt1").disabled = true
		document.getElementById("invisible").style.display = "none"
	}
	

		
	

