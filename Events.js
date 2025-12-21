/*
- JS Events: Action that happen in the browser(clicks, keypress, page loads etc)
- JS can listen to Events and respond with Function.
- Common events: click, submit, keydown, load, change etc.
 */

const btn_1 = document.getElementById('btn_1');
btn_1.addEventListener('click', () => {
    alert('Button Clicked!');
})



// Events Object: Event handlers receive an event object as the first parameter.

const btn_2 = document.getElementById('btn_2');
btn_2.addEventListener('click', (event) => {
    console.log(event);
})