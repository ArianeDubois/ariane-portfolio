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

document.addEventListener('scroll', function () {
	const pixels = window.pageYOffset;
	const titleProjectElement = document.querySelector('div.title');

	const sections = document.querySelectorAll('section');

	sections.forEach((section, indexSection) => {
		//-38
		if (section.offsetTop - 8 <= pixels) {
			let titleProject = section.getAttribute('data-title');

			//important!
			titleProjectElement.innerHTML = '';
			titleProject.split('').forEach((letter, indexLetter) => {
				let spanLetter = document.createElement('span');
				spanLetter.textContent += letter;

				if (sections[indexSection + 1] !== undefined) {
					let pixelRatio = (pixels - section.offsetTop) * 0.01;

					let folowwingTitle = sections[indexSection + 1].getAttribute('data-title');
					eval('var followingTitleLetter =' + folowwingTitle.split('')[indexLetter]);
					//pixel ratio doit faire à la fin un truc proche de 10 max
					spanLetter.style.setProperty(
						'font-variation-settings',
						`'wght' ${followingTitleLetter - 10 + pixelRatio}`
					);
				} else {
					spanLetter.classList.add('last-project');
				}

				titleProjectElement.appendChild(spanLetter);
			});
		}
	});
});

//ajouter une ancre sur chaque sections pour amelirorer la transition
//! l'ancre doit se dfaire un peu avant le haut de la section pour pouvoir voir la transition

//You can easily do that using a CSS transition. First you turn the opacity of the fields to 0, and then you replace the content and you make the fields appear again.

// opacité à 0 jusqu'à la fin de la transsition
// bloquer le scroll jusque la fin de la transition

//faire la wght eactive en fonction des 1000px de la section pour faire le -10 avec le scroll
//faire commencer l'animaation plus tard

//+ un positionnnement sticky du scroll
