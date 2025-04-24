const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const new_p = document.createElement("p");
new_p.textContent = "We hope you enjoyed the ride.";

sect.appendChild(new_p);

const text = document.createTextNode(
	" - the premier source for web development knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

new_p.setAttribute("class", "highlight");
