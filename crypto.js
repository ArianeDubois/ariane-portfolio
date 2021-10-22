let letters = [];
//texte clair = -20
let alpha = [
	(a = 20),
	(b = 40),
	(c = 60),
	(d = 80),
	(e = 100),
	(f = 120),
	(g = 140),
	(h = 160),
	(i = 180),
	(j = 200),
	(k = 220),
	(l = 240),
	(m = 260),
	(o = 280),
	(p = 300),
	(q = 320),
	(r = 340),
	(s = 360),
	(t = 380),
	(u = 400),
	(v = 420),
	(w = 440),
	(x = 460),
	(y = 480),
	(z = 500),
	(n = 520),
	(_ = 540),
];

function onScroll() {
	document.addEventListener('scroll', function () {
		const pixels = window.pageYOffset;
		const titleProjectElement = document.querySelector('div.title');
		let textImageElement = document.querySelector('.image-text');

		const sections = document.querySelectorAll('section');
		sections.forEach((section, indexSection) => {
			//-38
			if (section.offsetTop - 8 <= pixels) {
				let textImage = section.getAttribute('data-text');
				//get the value of each title
				let titleProject = section.getAttribute('data-title');
				textImageElement.textContent = textImage;
				//important
				titleProjectElement.innerHTML = '';
				titleProject.split('').forEach((letter, indexLetter) => {
					//create span for each title's letter
					let spanLetter = document.createElement('span');
					spanLetter.textContent += letter;
					textImageElement.innerHTML = textImage;

					//check if the title is not the last
					if (sections[indexSection + 1] !== undefined) {
						let pixelRatio = (pixels - section.offsetTop) * 0.01;

						//get the value of the letter in the following title
						let folowwingTitle = sections[indexSection + 1].getAttribute('data-title');
						eval('var followingTitleLetter =' + folowwingTitle.split('')[indexLetter]);

						//add style with the correct value, and animate it with the pixelRatio (scroll)
						spanLetter.style.setProperty(
							'font-variation-settings',
							`'wght' ${followingTitleLetter - 10 + pixelRatio}`
						);
						//check if the next letter is '_'
						if (followingTitleLetter == 540) {
							spanLetter.classList.add('erase');
							spanLetter.style.opacity = `${0.2 / pixelRatio}`;
						}
						//check if the current letter is '_'
						if (letter == '_') {
							spanLetter.style.opacity = `${0.09 * pixelRatio}`;
						}
					} else {
						spanLetter.classList.add('last-project');
					}

					titleProjectElement.appendChild(spanLetter);
				});
			}
		});
	});
}
onScroll();
