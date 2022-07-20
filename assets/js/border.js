function fun1() {
	let rt1=document.getElementById('rt1').value;
	let rt2=document.getElementById('rt2').value;
	let rt3=document.getElementById('rt3').value;
	let rt4=document.getElementById('rt4').value;
	let rt5=document.getElementById('rt5').value;

  	let input=document.getElementById('input');
  	let out = document.getElementById('output');

  	input.style.borderRadius = rt1+'px';
  	input.style.paddingTop = rt2+'px';
  	input.style.transform = "scale(" + rt3 + ")" + "rotate(" + rt4 + "deg)";
  	input.style.backgroundColor = rt5;

  	out.innerHTML = '-webkit-border-radius: '+ rt1 + 'px;\n';
	out.innerHTML += 'border-radius: '+ rt1 + 'px;\n';
	out.innerHTML += 'padding-top: '+ rt2 + 'px;\n';
	out.innerHTML += 'transform: '+ 'scale(' +rt3+ ');\n';
	out.innerHTML += 'transform: '+ 'rotate(' +rt4+ 'deg);\n';
	out.innerHTML += 'background-color: ' + rt5;
}
