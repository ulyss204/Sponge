
	document.getElementById("check").onclick = function(){
		this.style.backgroundImage = "url(sass/images/check1.png)"
		document.getElementById("bt1").disabled = false
	}
		if (document.getElementById("check").style.backgroundImage == "url(sass/images/check1.png)") {
		document.getElementById("check").onclick = function(){
		this.style.backgroundImage = "none"
		
		document.getElementById("bt1").disabled = true
	}
}
		
	

