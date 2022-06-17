const container = document.getElementById("container");

function makeRows(rows, cols) {
	container.style.setProperty('--grid-rows', rows);
	container.style.setProperty('--grid-cols', cols);
	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		cell.innerText = (c + 1);
		container.appendChild(cell).className = "grid-item";
	};
};

makeRows(16, 16);

let test = document.getElementById("container");

test.addEventListener("mouseenter", function (event) {
	event.target.style.color = "purple";


	setTimeout(function () {
		event.target.style.color = "";
	}, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function (event) {
	// highlight the mouseover target
	event.target.style.color = "orange";

	// reset the color after a short delay
	setTimeout(function () {
		event.target.style.color = "";
	}, 500);
}, false);