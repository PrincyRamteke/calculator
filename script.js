const outputScreen = document.getElementById("output-screen");
const errorMessage = document.getElementsByClassName("error")[0];

function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value =
      eval(outputScreen.value) === undefined ? 0 : eval(outputScreen.value);
  } catch (err) {
    clr();
    errorMessage.classList.remove("hide");
    errorMessage.classList.add("show");
    setTimeout(() => {
      errorMessage.classList.remove("show");
      errorMessage.classList.add("hide");
    }, 1000);
  }
}

function clr() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
