var list = document.getElementById("mylist");
// add an event listener to the list 
list.addEventListener("click", function(e){
	// get the parent element of the event target
	if(e.target.className=="remove"){
		var li = e.target.parentNode;
		list.removeChild(li);
	}
});
// add list 
var myForm = document.forms["myForm"];
// add and event listener to the form
myForm.addEventListener("submit", function(e){
	// prevent the default action of the click target
	e.preventDefault();
	// get the value of the input and store it in a variable
	var value = myForm.querySelector('input[type="text"]').value;
	// create new elements
	var myLi = document.createElement("li");
	var add_list = document.createElement("span");
	var remove = document.createElement("span");
	// set classes the the span tags
	add_list.setAttribute("class", "list")
	remove.setAttribute("class", "remove");
	// add content to the span tags
	add_list.textContent = value;
	remove.textContent = "Remove";
	// append the elements to the ul
	list.appendChild(myLi);
	myLi.appendChild(add_list);
	myLi.appendChild(remove);
});
