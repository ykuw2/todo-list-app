var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length; //Returns the length of the inputted value
}

function createListItem(){
    var li = document.createElement("li"); //Creates an list item element 
    li.appendChild(document.createTextNode(input.value)); //Appends a text node (text) into the list item
    ul.appendChild(li); //Append it to the Unsorted List
    input.value = ""; //Make the Input value empty after adding the item to the list
    
    var deleteButton = document.createElement("Button"); //Create a button element
    deleteButton.appendChild(document.createTextNode("X")); //Add an "X" to the button
    li.appendChild(deleteButton); //Added it to the list item
    deleteButton.onclick = function(){
        this.parentElement.style.display = "None"; //When the button is clicked, display it is none; i.e. delete the item
    }

    function completedItem(){
        li.classList.toggle("done"); //Toggling when the item is pressed or not
    }

    li.addEventListener("click", completedItem); //When the item is clicked, then the item turns green or turns to its original color.
}

function makeItemAfterClick(){
    if (inputLength() > 0){ //If input length is greater than 0;
        createListItem(); 
    }
}

function makeItemAfterKeyPress(event){
    if (inputLength() > 0 && event.which === 13){ //If input length is greater than 0 and the key pressed is enter/return
        createListItem();
    }
}



enterButton.addEventListener("click", makeItemAfterClick); //When the enter button is "clicked", then execute the function
 
input.addEventListener("keypress", makeItemAfterKeyPress); //When the enter/return button is "pressed", then execute the function
