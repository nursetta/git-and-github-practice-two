// JavaScript to be added 
window.onload = start;
function start(){
document.getElementById('button-yellow').addEventListener('click', addEmail);

}

function addEmail () {
	prompt('Please enter Email');
	document.getElementById('button-yellow').textContent = 'Thank you for your email!!';
}
