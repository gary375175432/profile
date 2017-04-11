btn1.onclick = function (){	
	stn1.style.cssText="transition: 2s;opacity:0;z-index:-1;transform: translate(-180px,-70px)  scale(0.5,0.5) rotateX(10deg); ";
	har.style.cssText="opacity:1;transition: 1s;transform: translate(0px,137px)";
	ase1.style.cssText="opacity:1;transition: 1s;transform: translate(0px,137px)";
	ase2.style.cssText="opacity:1;transition: 1s;transform: translate(0px,-137px)";
	stn2.style.cssText="opacity:1;transition: 1s;transform: translate(0px,-137px)";
	div3.style.cssText="opacity:0;";
	div4.style.cssText="opacity:0;";
	div5.style.cssText="opacity:0;";
}
lab1.onclick = function(){
	lab1.style.cssText="background:black;color:white";
	lab2.style.cssText="background:rgb(244,208,63);color:black";
	lab3.style.cssText="background:rgb(244,208,63);color:black";
	lab4.style.cssText="background:rgb(244,208,63);color:black";
	div2.style.cssText="opacity:1;transition: 3s;";
	div3.style.cssText="opacity:0;";
	div4.style.cssText="opacity:0;";
	div5.style.cssText="opacity:0;";
}
lab2.onclick = function(){
	lab2.style.cssText="background:black;color:white";
	lab1.style.cssText="background:rgb(244,208,63);color:black";
	lab3.style.cssText="background:rgb(244,208,63);color:black";
	lab4.style.cssText="background:rgb(244,208,63);color:black";
	div2.style.cssText="opacity:0;";
	div3.style.cssText="opacity:1;transition: 3s;";
	div4.style.cssText="opacity:0;";
	div5.style.cssText="opacity:0;";
}
lab3.onclick = function(){
	lab3.style.cssText="background:black;color:white";
	lab2.style.cssText="background:rgb(244,208,63);color:black";
	lab1.style.cssText="background:rgb(244,208,63);color:black";
	lab4.style.cssText="background:rgb(244,208,63);color:black";
	div2.style.cssText="opacity:0;";
	div3.style.cssText="opacity:0;";
	div4.style.cssText="opacity:1;transition: 3s;z-index: 1;";
	div5.style.cssText="opacity:0;";
}
lab4.onclick = function(){
	lab4.style.cssText="background:black;color:white";
	lab2.style.cssText="background:rgb(244,208,63);color:black";
	lab3.style.cssText="background:rgb(244,208,63);color:black";
	lab1.style.cssText="background:rgb(244,208,63);color:black";
	div2.style.cssText="opacity:0;";
	div3.style.cssText="opacity:0;";
	div4.style.cssText="opacity:0;";
	div5.style.cssText="opacity:1;transition: 3s;z-index: 1;";
}
