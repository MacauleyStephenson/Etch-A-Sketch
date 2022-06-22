const container = document.getElementById("container");

function makeRows(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		cell.innerText = (c + 1);
		container.appendChild(cell).className = "grid-item";
	};
	hoverColor();
};



let randomColor = function () {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color;
}

function hoverColor() {
	let items = document.querySelectorAll('.grid-item');
	items.forEach(item => {
		item.addEventListener('mouseover', () => {
			item.style.backgroundColor = `${randomColor()}`;
		});
	});
}




makeRows(16, 16);