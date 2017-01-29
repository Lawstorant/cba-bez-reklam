a = document.getElementsByTagName("div");
b = document.getElementsByTagName("iframe");
var f1 = true;
for(i = 0; i < a.length; ++i){
	if(a[i].id == "start_reklam") f1 = true;
	if(f1) a[i].style.display = "none";
	if(a[i].id == "stop_reklam") f1 = false;
}
for(i = 0; i < b.length; ++i){
	b[i].style.display = "none";
}
