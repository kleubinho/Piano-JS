var teclas = document.querySelectorAll(".tc");
var barulho = document.getElementById("barulho");
var nota = document.getElementById("nota");

teclas.forEach((t) => {
  t.addEventListener("click", () => {
    console.log("Você clicou na tecla " + t.id);
    playSound(t.id);
  });
});

window.onkeydown = (event) => teclado(event.key);

function teclado(key) {
  const note = returnNote(key);
  const button = document.getElementById(note);

  if (button) {
    treatButton(button, note);
  }
}

function returnNote(key) {
  switch (key) {
    case "a":
      return "do";
    case "w":
      return "do-sus";
    case "s":
      return "re";
    case "e":
      return "re-sus";
    case "d":
      return "mi";
    case "f":
      return "fa";
    case "t":
      return "fa-sus";
    case "g":
      return "sol";
    case "y":
      return "sol-sus";
    case "h":
      return "la";
    case "u":
      return "la-sus";
    case "j":
      return "si";
    case "k":
      return "do2";
    case "o":
      return "do2-sus";
    case "l":
      return "re2";
    case "p":
      return "re2-sus";
    case ";":
      return "mi2";
  }
}

function playSound(note) {
  barulho.src = "sons/" + note + ".mp3";
  barulho.play();
  nota.value = note;
}

function treatButton(button, note) {
  let finalColor;
  let initialColor;

  const name = button.id.slice(-3);
  console.log(name);

  if (name == "sus") {
    finalColor = "rgb(47, 47, 47)";
    initialColor = "black";
  } else {
    finalColor = "rgb(173, 173, 173)";
    initialColor = "rgb(255, 255, 255)";
  }

  button.style.backgroundColor = finalColor;

  playSound(note);

  setTimeout(function () {
    button.style.backgroundColor = initialColor;
  }, 300);
}
