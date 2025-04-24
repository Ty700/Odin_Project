const list = document.querySelector("ul");
const userInput = document.querySelector("input");
const btn = document.querySelector("button");

/*
	* FUNCTION: Adds a new item to the 'list' object
	* PARAMS: VOID
	* RETURNS: VOID
*/
	
function addNewItem() {
	var userInputVal  = `${userInput.value}`;

	if (userInputVal !== '') {
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
	}
	userInput.value = '';

}

/* On user click of the btn, it will add an item */
btn.addEventListener("click", addNewItem);

/* If the user clicks enter, it will add an item */
userInput.addEventListener("keydown", function(e) {
	if (e.key === 'Enter') {
		addNewItem();
	}
});
