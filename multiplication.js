function f1()
{
  let x = document.querySelectorAll("input");
  console.log(x);
  let num1 = Number(x[0].value);
  let num2 = Number(x[1].value);
  document.querySelector("h1").innerHTML = num1 * num2;

}