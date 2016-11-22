/*Skrypt który chowa wszystkie reklamy kiedy
hostujemy za darmo na hostingu cba.pl.
Możliwe że będzie działać na innych hostingach.
Warunkiem jest używanie znaczników <div> lub
<iframe> przez hosting.

Pamiętaj dodać te znaczniki.

<div id="stop_reklam"></div>
<kod strony>
<div id="start_reklam"></div>

Pokazują one skryptowi gdzie znajduje
się kod strony.*/

window.onload = function(){
	a = document.getElementsByTagName("div");
	b = document.getElementsByTagName("iframe");
	f1 = true;
	for(i = 0; i < a.length; ++i){
		if(a[i].id == "start_reklam") f1 = true;
		if(f1) a[i].style.display = "none";
		if(a[i].id == "stop_reklam") f1 = false;
		b[i].style.display = "none";
	}
};
