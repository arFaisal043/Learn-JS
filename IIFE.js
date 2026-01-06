// function variant
(function() {
  const arrowMessage = "This also runs immediately!";
  console.log(arrowMessage);
})();


// Arrow function variant
(() => {
  const arrowMessage = "This also runs immediately!";
  console.log(arrowMessage);
})(); 


// async function variant
(async () => {
  const arrowMessage = "This also runs immediately!";
  console.log(arrowMessage);
})(); 