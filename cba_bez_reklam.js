document.addEventListener("load", function(){
	let a = document.getElementsByTagName("div");
	let b = document.getElementsByTagName("iframe");
	let  f1 = true;
	for(let i = 0; i < a.length; ++i){
		if(a[i].id == "start_reklam") f1 = true;
		if(f1) a[i].style.display = "none";
		if(a[i].id == "stop_reklam") f1 = false;
	}
	for(let i = 0; i < b.length; ++i){
		b[i].style.display = "none";
	}
});
