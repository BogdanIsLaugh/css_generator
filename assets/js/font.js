function fun1() {

	let rt1 = document.getElementById('rt1').value;
	let rt2 = document.getElementById('rt2').value;
	let rt3 = document.getElementById('rt3').value;

  	let h1 = document.getElementById('h1');
  	let out = document.getElementById('output');

  	h1.style.fontSize = rt1+'px';
  	h1.style.color = rt2;
  	h1.style.letterSpacing = rt3+'px';

 	out.innerHTML = 'font-size: '+ rt1 + 'px;\n';
 	out.innerHTML += 'color: '+ rt2 + '\n';
 	out.innerHTML += 'letter-spacing: '+ rt3 + 'px;';
}	