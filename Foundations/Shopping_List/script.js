const list = document.querySelector("ul");
const userInput = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	var userInputVal  = `${userInput.value}`;
	userInput.value = '';

	var listItem = document.createElement("li");
	var listText = document.createElement("span");
	var delete_button = document.createElement("button");

	listText.textContent = userInputVal;
	delete_button.textContent = "delete";

	listItem.appendChild(listText);
	listItem.appendChild(delete_button);
	list.appendChild(listItem);

	delete_button.addEventListener("click", () =>  {
		list.removeChild(listItem);
	});

	userInput.focus();
});
