/* 
-- All way if catch element:
1. document.getElementsByClassName('')
2. document.getElementsByTagName('')
3. document.getElementsByTagName('');
4. document.querySelector(''); // first element
5. document.querySelectorAll(''); // all elements

*/

// by id:
const a = document.getElementById('btn_1');



// by Query Selector:
const p = document.querySelector('p');
const p_by_class = document.querySelector('.second_p');
const p_by_id = document.querySelector('#third_p');
const all_p = document.querySelectorAll('p');



// Dom Manipulation:
const btn = document.getElementById("btn_1");
btn.addEventListener("click", () => {
  const h = document.getElementById("heading_1");
  h.style.color = "red";
  h.innerText = "Hello Motherfuc*er"; // Inner text manipulation
  btn.innerHTML = "Get back"; // Inner html manipulation
});




/* DOM Element creation:
Use document.createElement(tagname) to create new elements
Set properties (textContents, className etc.) before adding to DOM
*/

// create a text element
const button = document.querySelector('#btn');
button.addEventListener("click", () => {
    const newElm = document.createElement("p");
    newElm.textContent = "Faisal";

    // transfer on div -> first select then append
    const innerDiv = document.querySelector("#container");
    innerDiv.appendChild(newElm);
});


// create a li element
const x = document.querySelector('#myList');
const li = document.createElement('li');
li.textContent = "USA";
x.appendChild(li);




// Form Handling