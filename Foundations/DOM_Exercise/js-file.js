
/* 

Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/


// Create and append a <p> element with red text
const pElement = document.createElement("p");
pElement.style.color = "red";
pElement.textContent = "Hey, I'm red!";
document.body.appendChild(pElement);

// Create and append an <h3> element with blue text
const h3Element = document.createElement("h3");
h3Element.style.color = "blue";
h3Element.textContent = "I'm a blue h3!";
document.body.appendChild(h3Element);

// Create a <div> with a black border and pink background
const divElement = document.createElement("div");
divElement.style.cssText = "background-color: pink; border: 1px solid black;";

// Create and append an <h1> inside the <div>
const h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";
divElement.appendChild(h1Element);

// Create and append a <p> inside the <div>
const anotherPElement = document.createElement("p");
anotherPElement.textContent = "ME TOO!";
divElement.appendChild(anotherPElement);

// Append the <div> to the document body
document.body.appendChild(divElement);

/*
	* A 'better' way than the commented out button in HTML file 
	* However, there is an even better way listed below.
	* Why is this way not good?
	* 	- Can only have one onclick property for a DOM element
*/
const btn = document.querySelector("#btn")
btn.onclick = () => alert("Hello World!")

/* The best way */
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function(e) {
	e.target.style.background = "blue";
});

// const p_element = document.createElement("p");
// p_element.setAttribute("style", "color: red;");
// p_element.textContent = "Hey, I'm red!";
// document.body.append(p_element);

// const h3_element = document.createElement("h3");
// h3_element.setAttribute("style", "color: blue;");
// h3_element.textContent = "I'm a blue h3!";
// document.body.append(h3_element);

// const div_element = document.createElement("div");
// div_element.style.backgroundColor = "pink";
// div_element.style.borderColor = "black";
// document.body.append(div_element);

// const h1_element = document.createElement("h1");
// h1_element.textContent = "I'm in a div";
// div_element.append(h1_element);

// const another_p_element = document.createElement("p");
// another_p_element.textContent = "ME TOO";
// div_element.append(another_p_element);
