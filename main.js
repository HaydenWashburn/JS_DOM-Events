console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let newNode1 = document.getElementById("node1");
newNode1.innerHTML = "I used the getElementById('node1') method to access this.";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let newNode2 = document.getElementsByClassName("node2")[0];
newNode2.textContent = "I used the getElementByClassName('node2') method to access this "
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Tags = document.getElementsByTagName("h3");
for (let h3 of h3Tags){
    h3.textContent = "I used the getElementByTagName('h3') method to access all of these"
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newP = document.createElement("p");
newP.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent")
parent.appendChild(newP)
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let newAnchor = document.createElement("a");
newAnchor.textContent = "I am a <a> tag";
newAnchor.href = "https://portal.truecoders.io/course/52/lecture/16/exercise";
newAnchor.target = "_blank"
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newAnchor, newP);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

exercise3Container.replaceChild(newChild, oldChild)
// TODO: Remove the "New Child Node"
setTimeout(()=> {
    exercise3Container.removeChild(newChild);
}, 2000)
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let unorderedList = document.createElement("ul")
// TODO: Iterate over the array values, and create a list item element for each
for (let item =0; item<list.length; item++){
    let li = document.createElement("li");
    li.textContent = list[item];
    unorderedList.appendChild(li)
}

// list.forEach((item)=>{
//     let li = document.createElement("li");
//     li.textContent = item;
// // TODO: Append the new list items to the unordered list element
//     unorderedList.appendChild(li);
// })
// TODO: Append the unordered list to the `div#container` under exercise 4 
let exercise4container = document.querySelector("#container");
exercise4container.appendChild(unorderedList)

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show(){
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let closeBtn = document.createElement("button");
    
    modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeBtn.textContent = "close"
    closeBtn.addEventListener("click",()=>{
        document.body.removeChild(modalContainer)
    })

    modalCard.append(closeBtn);
    modalCard.classList.add("modal-card");
    modalContainer.id = "modal";

    modalContainer.appendChild(modalCard);
    document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
