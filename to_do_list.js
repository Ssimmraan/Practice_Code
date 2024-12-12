function f1() 
{
  let inputs = document.getElementsByTagName("input");
  
  if (inputs.length > 0) {
    let x = inputs[0].value; 
    console.log(x); 
    document.querySelector("ul").textContent = x; 
  } else {
    console.log("No input elements found.");
  }
}
