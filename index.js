const box = document.querySelector(".box");
const container = document.getElementById("container");


function makeRows(rows, cols) {
	for (r = 0; r < rows; r++) {
		let cell = document.createElement("div");
		box.appendChild(row).classNam = "grid-row";
		for (c = 0; c < cols; c++) {
			let coloumn = document.createElement("div");
			cell.appendChild(coloumn).className = "cell";
		};
	}
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