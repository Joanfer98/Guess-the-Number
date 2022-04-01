window.addEventListener("DOMContentLoaded", (event) => {
  const sendButton = document.getElementById("button");
  const input = document.getElementById("input");
  const reloadButton = document.getElementById("button2");
  const clueImage = document.getElementById("img");
  const helpButton = document.getElementById("helpButton");
  const randomNumber = Math.floor(Math.random() * 10 - 1) + 1;
  console.log(randomNumber);

  const help = document.getElementById("help");
  const inputNumber = document.getElementById("numberInsert");
  function sendData(){
    const value1 = document.createTextNode("Winner");
    const value2 = document.createTextNode("Sorry, try again");
    help.classList.add("helpStyle");
    helpButton.classList.add("centerIdea");
    help.textContent = "";
    inputNumber.textContent = "";
    if (input.value == randomNumber) {
      inputNumber.appendChild(value1);
    } else {
      inputNumber.appendChild(value2);
    }
  }
  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    sendData()
    
  });
  clueImage.addEventListener("click", (e) => {
    e.preventDefault();
    help.textContent = "";
    const clueHigher = document.createTextNode(
      "The number is higher arrow"
      );
      const clueLower = document.createTextNode(
        "The number is lower"
        );
        const clueHint = document.createTextNode(
          "No hint"
          )
          help.classList.remove("helpStyle");
          helpButton.classList.remove("centerIdea");
          
          if (input.value !== randomNumber && input.value > randomNumber) {
            help.appendChild(clueHigher);
          } else if((input.value !== randomNumber && input.value < randomNumber)) {
            help.appendChild(clueLower);
          }else{
            help.appendChild(clueHint);
          }
  });
  reloadButton.addEventListener("click", () => window.location.reload());
});
