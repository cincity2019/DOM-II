// Your code goes here

// mouseover
const textCon = document.querySelector('.content-section');
console.log(textCon);

textCon.addEventListener('mouseover', () => {
	textCon.style.transform = 'scale(1.2)';
	textCon.style.transition = 'transform 0.3s';
});

// mouseleave
textCon.addEventListener('mouseleave', () => {
	textCon.style.transform = 'scale(1)';
});

//dblclick
const navStyle = document.querySelectorAll('.nav-link').forEach((item) => {
	item.addEventListener('dblclick', () => {
		item.style.color = 'blue';
	});
});

// mousedown
const content = document.querySelectorAll('.content-section');
content.forEach((thing) => {
	thing.addEventListener('mousedown', () => {
		thing.style.backgroundColor = 'purple';
	});
});

// mouseup
content.forEach((thing) => {
	thing.addEventListener('mouseup', () => {
		thing.style.backgroundColor = 'green';
	});
});

//resize
const textColor = document.querySelector('p');
window.addEventListener('resize', () => {
	textColor.style.color = 'yellow';
});

//scroll
document.addEventListener('scroll', function() {
	document.querySelectorAll('h2').forEach((item) => {
		item.style.color = 'orange';
	});
});

//mouseover
const textChange = document.querySelector('h4');
textChange.addEventListener('mouseover', (event) => {
	textChange.style.transform = 'rotateY(350deg)';
	textChange.style.transitionDuration = '3s';
	textChange.style.color = 'lightpink';
});
