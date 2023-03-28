

const themeSwitcher = document.querySelectorAll('.theme_svg');
themeSwitcher.forEach (switcher =>{
	switcher.addEventListener('click', function(){
		applyTheme(this.dataset.theme);
	})
});

function applyTheme (themeName) {
	let themeUrl = `theme_${themeName}.css`;
	document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}