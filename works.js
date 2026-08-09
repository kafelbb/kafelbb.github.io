const divs= document.querySelectorAll('.design, .modeling, .coding, .composing, .texturing, .building, .arduino');
const buttons = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll(".icon3");
const snds = document.querySelectorAll(".mbtn");

function resizeWrapper() {
	const wrapper = document.querySelector('.wrapper2');
	const sixseven = document.getElementById('67');

	if (!wrapper || !sixseven) return;

	sixseven.style.height = 'auto';
	sixseven.style.maxHeight = 'none';

	if (window.innerWidth <= 700 || window.innerHeight <= 800) {
		const ch = sixseven.scrollHeight;
		console.log(ch);
		wrapper.style.height = ch + 'px';
		wrapper.style.width = "100%";
	} else {
		wrapper.style.height = "100%";
		sixseven.style.height = "";
		sixseven.style.maxHeight = "";
	}
}
divs.forEach(d => {
				d.style.display = "none";
			})
document.querySelector(".design").style.display = "grid";

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const context = event.target.id;
		const div = document.querySelector(`.${context}`);
		console.log(div);
		if (div){
			divs.forEach(d => {
				d.style.display = "none";
			})
			div.style.display = "grid";
			buttons.forEach(b => b.classList.remove('selected'));
			event.currentTarget.classList.add('selected');
		}
		resizeWrapper();
    });
});

imgs.forEach(img => {
	console.log(img);
	img.addEventListener("click", (event) => {
		window.open(event.target.id, '_blank');
	});
});
snds.forEach(img => {
	console.log(img);
	img.addEventListener("click", (event) => {
		window.open(event.target.id, '_blank');
	});
});

window.addEventListener('DOMContentLoaded', resizeWrapper);
window.addEventListener('resize', resizeWrapper);